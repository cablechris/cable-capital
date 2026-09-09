"use client";
import { useEffect, useRef, useState } from "react";

const vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.0,1.0);}`;
const fragment = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 pointer;
uniform float interaction;
const mat2 octave=mat2(1.6,1.2,-1.2,1.6);
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);return -1.0+2.0*mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}
float wave(vec2 uv,float choppy){uv+=noise(uv)*0.6;vec2 w=1.0-abs(sin(uv));vec2 s=abs(cos(uv));w=mix(w,s,w);return pow(1.0-pow(w.x*w.y,0.65),choppy);}
float height(vec3 p){float freq=0.19;float amp=0.65;float chop=3.2;vec2 uv=p.xz;uv.x*=0.78;float h=0.0;float t=time*0.26;
for(int i=0;i<4;i++){float d=wave((uv+t)*freq,chop);d+=wave((uv-t*0.7)*freq,chop);h+=d*amp;uv*=octave;freq*=1.9;amp*=0.23;chop=mix(chop,1.0,0.24);}
float dist=length(p.xz-vec2(pointer.x*12.0, pointer.y*10.0-2.0));h+=sin(dist*2.0-time*1.3)*exp(-dist*0.24)*0.12*interaction;
return p.y-h;}
vec3 normal(vec3 p,float e){float h=height(p);return normalize(vec3(height(p+vec3(e,0,0))-h,e,height(p+vec3(0,0,e))-h));}
float trace(vec3 ori,vec3 dir,out vec3 p){float near=0.0;float far=180.0;float hf=height(ori+dir*far);if(hf>0.0){p=ori+dir*far;return far;}float hn=height(ori);float mid=0.0;
for(int i=0;i<9;i++){mid=mix(near,far,hn/(hn-hf));p=ori+dir*mid;float hm=height(p);if(hm<0.0){far=mid;hf=hm;}else{near=mid;hn=hm;}}return mid;}
vec3 sky(vec3 rd){float horizon=exp(-abs(rd.y)*13.0);vec3 base=vec3(0.015,0.028,0.044);float glow=exp(-pow((rd.x-0.45)*1.7,2.0));return base+vec3(0.026,0.075,0.074)*horizon*glow;}
void main(){vec2 uv=gl_FragCoord.xy/resolution;vec2 q=(2.0*gl_FragCoord.xy-resolution)/resolution.y;
vec3 ori=vec3(0.0,3.8,7.0);vec3 dir=normalize(vec3(q.x,q.y-0.23,-1.85));
vec3 color=sky(dir);
if(dir.y<0.035){vec3 p;float d=trace(ori,dir,p);vec3 n=normal(p,0.018+0.002*d);vec3 reflected=reflect(dir,n);float fresnel=pow(1.0-clamp(dot(n,-dir),0.0,1.0),3.0);
float band=sin(p.x*0.12+p.z*0.07+time*0.04)*0.5+0.5;
vec3 teal=vec3(0.07,0.65,0.53);vec3 violet=vec3(0.40,0.13,0.66);vec3 pink=vec3(0.65,0.18,0.40);
vec3 tint=mix(teal,violet,smoothstep(0.40,0.93,band));tint=mix(tint,pink,smoothstep(0.73,1.0,sin(p.x*0.07-p.z*0.1)*0.5+0.5)*0.55);
float facing=pow(clamp(dot(n,normalize(vec3(0.4,0.75,-0.7))),0.0,1.0),3.0);
float shine=pow(max(dot(reflect(dir,n),normalize(vec3(0.5,0.27,-1.0))),0.0),45.0);
float crest=smoothstep(0.42,1.2,p.y)*pow(1.0-n.y,0.65);
vec3 water=vec3(0.006,0.022,0.032)+tint*(0.095+facing*0.18+crest*0.65);
water+=sky(reflected)*fresnel*1.8+tint*shine*1.7;
water+=vec3(0.35,0.86,0.77)*pow(max(crest,0.0),3.0)*0.48;
float fog=1.0-exp(-d*0.008);water=mix(water,sky(dir),fog);color=mix(water,color,smoothstep(-0.005,0.025,dir.y));}
float vignette=1.0-0.25*pow(length((uv-0.5)*vec2(0.9,1.0)),1.3);color*=vignette;
color=pow(max(color,vec3(0.0)),vec3(0.88));
color+=(hash(gl_FragCoord.xy)-0.5)/255.0;
gl_FragColor=vec4(color,1.0);
}`;

export default function Ocean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playingRef = useRef(true);

  const [available, setAvailable] = useState(true);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      setAvailable(false);
      return;
    }
    function compile(type: number, source: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, source);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(s);
        return null;
      }
      return s;
    }
    const vs = compile(gl.VERTEX_SHADER, vertex),
      fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) {
      setAvailable(false);
      return;
    }
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setAvailable(false);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const ures = gl.getUniformLocation(program, "resolution"),
      utime = gl.getUniformLocation(program, "time"),
      upointer = gl.getUniformLocation(program, "pointer"),
      uinteraction = gl.getUniformLocation(program, "interaction");
    let visible = true,
      frame = 0,
      last = 0,
      elapsed = 21,
      dirty = true;
    let px = 0,
      py = 0,
      tx = 0,
      ty = 0,
      energy = 0,
      targetEnergy = 0;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function preference() {
      playingRef.current = !motion.matches;
      dirty = true;
    }
    preference();
    motion.addEventListener("change", preference);
    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.35, 1500 / rect.width);
      canvas!.width = Math.round(rect.width * scale);
      canvas!.height = Math.round(rect.height * scale);
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      dirty = true;
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const parent = canvas.closest("section")!;
    function move(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = 1 - ((e.clientY - r.top) / r.height) * 2;
      targetEnergy = 1;
    }
    function leave() {
      targetEnergy = 0;
    }
    parent.addEventListener("pointermove", move, { passive: true });
    parent.addEventListener("pointerleave", leave);
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        dirty = true;
      },
      { threshold: 0 },
    );
    io.observe(canvas);
    function draw(now: number) {
      frame = requestAnimationFrame(draw);
      const dt = Math.min((now - last) / 1000, 0.04);
      last = now;
      if (!visible || document.hidden) return;
      if (!playingRef.current && !dirty) return;
      if (playingRef.current) {
        elapsed += dt;
        px += (tx - px) * 0.035;
        py += (ty - py) * 0.035;
        energy += (targetEnergy - energy) * 0.02;
      }
      gl!.uniform2f(ures, canvas!.width, canvas!.height);
      gl!.uniform1f(utime, elapsed);
      gl!.uniform2f(upointer, px, py);
      gl!.uniform1f(uinteraction, energy);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      dirty = false;
    }
    frame = requestAnimationFrame(draw);
    const lost = (e: Event) => {
      e.preventDefault();
      setAvailable(false);
      cancelAnimationFrame(frame);
    };
    canvas.addEventListener("webglcontextlost", lost);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", preference);
      canvas.removeEventListener("webglcontextlost", lost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <>
      <div className="ocean-wrap">
        <canvas ref={canvasRef} className="ocean-canvas" aria-hidden="true" />
      </div>
      {available && (
        <>
          <div className="ocean-invitation" aria-hidden="true">
            LET YOUR CURIOSITY DRIFT
          </div>
        </>
      )}
    </>
  );
}
