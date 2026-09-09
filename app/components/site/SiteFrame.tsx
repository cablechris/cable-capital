'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SiteFooter from './SiteFooter';
const nav = [{href:'/thesis',label:'Theses & memos'},{href:'/research',label:'Research & writing'},{href:'/investments',label:'Investments'},{href:'/about',label:'About'}];
export default function SiteFrame({children}:{children:React.ReactNode}){
 const pathname=usePathname();const home=pathname==='/'||pathname==='/v2';
 const [menuOpen,setMenuOpen]=useState(false);const dialogRef=useRef<HTMLDialogElement>(null);
 useEffect(()=>{setMenuOpen(false)},[pathname]);
 useEffect(()=>{const dialog=dialogRef.current;if(!dialog)return;const previous=document.body.style.overflow;
 if(menuOpen){dialog.showModal();document.body.style.overflow='hidden'}else if(dialog.open)dialog.close();
 return()=>{document.body.style.overflow=previous};},[menuOpen]);
 const active=(href:string)=>href==='/thesis'?/^\/(thesis|memos)(\/|$)/.test(pathname):href==='/research'?/^\/(research|papers|blog|barbell)(\/|$)/.test(pathname):pathname===href;
 return <div className={`ocean-site ${home?'is-home':'is-reading'}`}>
 {!home&&<><a className="site-skip" href="#site-content">Skip to content</a><header className="site-nav-header"><Link className="site-brand" href="/">Cable Capital</Link><nav className="site-desktop-nav" aria-label="Main navigation">{nav.map(n=><Link key={n.href} href={n.href} aria-current={active(n.href)?'page':undefined}>{n.label}</Link>)}</nav><a className="site-contact" href="mailto:info@cable.capital">Get in touch <span aria-hidden>↗</span></a><button className="site-menu-toggle" type="button" onClick={()=>setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="site-menu">Menu <span aria-hidden>☰</span></button></header>
 <dialog id="site-menu" className="site-menu" ref={dialogRef} onClose={()=>setMenuOpen(false)} onCancel={()=>setMenuOpen(false)} aria-label="Site navigation"><div className="site-menu-top"><Link href="/" onClick={()=>setMenuOpen(false)}>Cable Capital</Link><button type="button" onClick={()=>setMenuOpen(false)} aria-label="Close menu">Close ×</button></div><nav aria-label="Mobile navigation"><Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>{nav.map(n=><Link key={n.href} href={n.href} aria-current={active(n.href)?'page':undefined} onClick={()=>setMenuOpen(false)}>{n.label}<span aria-hidden>↗</span></Link>)}</nav><a className="site-menu-email" href="mailto:info@cable.capital">info@cable.capital ↗</a></dialog></>}
 <div id="site-content" tabIndex={-1}>{children}</div>{!home&&<SiteFooter/>}
 </div>;
}
