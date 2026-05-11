'use client';

import { useEffect } from 'react';

const css = `
:root {
  --paper: #F5F1E8;
  --paper-deep: #EDE6D6;
  --ink: #1A1A1A;
  --ink-soft: #2E2E2E;
  --muted: #6B6155;
  --muted-deep: #4A4136;
  --rule: #D9D0BC;
  --rule-soft: #E6DEC9;
  --accent: #8B2F1F;
  --accent-deep: #5C1E14;
  --signal: #1F3A5F;
  --highlight: #F5E8CC;
  --serif: 'Fraunces', 'Georgia', serif;
  --body: 'Newsreader', 'Georgia', serif;
  --mono: 'JetBrains Mono', 'SF Mono', monospace;
}

#thesis-root * { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

#thesis-root {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--body);
  font-size: 19px;
  line-height: 1.65;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1, "liga" 1, "onum" 1;
  min-height: 100vh;
}

#thesis-root::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.36 0 0 0 0 0.3 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* NAV */
#thesis-root nav.topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(245, 241, 232, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rule);
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

#thesis-root nav.topbar .brand {
  font-weight: 600;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 12px;
}

#thesis-root nav.topbar .brand .monogram {
  width: 22px;
  height: 22px;
  border: 1.5px solid var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 11px;
  font-weight: 700;
  text-transform: none;
  letter-spacing: -0.02em;
}

#thesis-root nav.topbar .meta {
  color: var(--muted);
  display: flex;
  gap: 24px;
}

#thesis-root nav.topbar .meta a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
#thesis-root nav.topbar .meta a:hover { color: var(--accent); }

/* HERO */
#thesis-root .hero {
  max-width: 760px;
  margin: 0 auto;
  padding: 180px 32px 80px;
  position: relative;
  z-index: 2;
}

#thesis-root .eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 16px;
}

#thesis-root .eyebrow::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--accent);
}

#thesis-root .hero h1 {
  font-family: var(--serif);
  font-size: clamp(48px, 7vw, 92px);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.035em;
  color: var(--ink);
  margin-bottom: 28px;
  font-feature-settings: "ss01" 1, "ss02" 1;
}

#thesis-root .hero h1 em {
  font-style: italic;
  font-weight: 300;
  color: var(--accent);
}

#thesis-root .hero .deck {
  font-family: var(--body);
  font-size: clamp(20px, 2vw, 24px);
  line-height: 1.45;
  color: var(--muted-deep);
  font-weight: 400;
  font-style: italic;
  margin-bottom: 56px;
  max-width: 600px;
}

#thesis-root .byline {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  padding-top: 28px;
  border-top: 1px solid var(--rule);
}

#thesis-root .byline > div span {
  display: block;
  color: var(--ink);
  font-weight: 500;
  margin-top: 4px;
  letter-spacing: 0.04em;
}

/* TLDR */
#thesis-root .tldr-section {
  max-width: 760px;
  margin: 60px auto 0;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}

#thesis-root .tldr-card {
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  padding: 48px 52px;
  position: relative;
}

#thesis-root .tldr-card::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px;
  width: 32px;
  height: 32px;
  border-top: 2px solid var(--accent);
  border-left: 2px solid var(--accent);
}
#thesis-root .tldr-card::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 32px;
  height: 32px;
  border-bottom: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
}

#thesis-root .tldr-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

#thesis-root .tldr-card h2 {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-bottom: 24px;
}

#thesis-root .tldr-card p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin-bottom: 18px;
}

#thesis-root .tldr-card p:last-child { margin-bottom: 0; }

#thesis-root .tldr-positions {
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

#thesis-root .tldr-pos {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--muted);
}

#thesis-root .tldr-pos .ticker {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  display: block;
  margin-bottom: 4px;
  text-transform: none;
}

#thesis-root .tldr-pos .role {
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 6px;
  font-size: 10px;
}

#thesis-root .tldr-pos .size {
  color: var(--ink-soft);
  font-size: 13px;
  font-family: var(--body);
  letter-spacing: 0;
}

@media (max-width: 640px) {
  #thesis-root .tldr-positions { grid-template-columns: repeat(2, 1fr); }
  #thesis-root .tldr-card { padding: 36px 28px; }
}

/* TOC */
#thesis-root .toc {
  max-width: 760px;
  margin: 80px auto 0;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}

#thesis-root .toc-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule);
}

#thesis-root .toc-list {
  list-style: none;
}

#thesis-root .toc-list li {
  margin-bottom: 10px;
}

#thesis-root .toc-list a {
  display: flex;
  align-items: baseline;
  gap: 16px;
  text-decoration: none;
  color: var(--ink-soft);
  font-family: var(--body);
  font-size: 17px;
  padding: 6px 0;
  transition: color 0.2s, padding-left 0.2s;
  border-bottom: 1px dotted transparent;
}

#thesis-root .toc-list a:hover {
  color: var(--accent);
  padding-left: 8px;
  border-bottom-color: var(--rule);
}

#thesis-root .toc-list a .num {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.05em;
  flex-shrink: 0;
  width: 24px;
}

/* ARTICLE */
#thesis-root article {
  max-width: 680px;
  margin: 0 auto;
  padding: 120px 32px 120px;
  position: relative;
  z-index: 2;
}

#thesis-root section.chapter {
  margin-bottom: 80px;
  scroll-margin-top: 80px;
}

#thesis-root .chapter-mark {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}

#thesis-root .chapter-mark::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--rule);
}

#thesis-root h2.chapter-title {
  font-family: var(--serif);
  font-size: clamp(32px, 4.2vw, 44px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin-bottom: 36px;
  font-feature-settings: "ss01" 1;
}

#thesis-root h2.chapter-title em {
  font-style: italic;
  font-weight: 400;
  color: var(--accent);
}

#thesis-root h3 {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 56px 0 20px;
}

#thesis-root article p {
  margin-bottom: 22px;
  color: var(--ink-soft);
}

#thesis-root article p:first-of-type::first-letter {
  font-family: var(--serif);
  font-size: 4.5em;
  font-weight: 500;
  float: left;
  line-height: 0.85;
  margin: 0.05em 0.08em 0 -0.05em;
  color: var(--accent);
  font-feature-settings: "ss01" 1;
}

#thesis-root article strong {
  font-weight: 600;
  color: var(--ink);
}

#thesis-root article em {
  font-style: italic;
  color: var(--ink);
}

#thesis-root .pullquote {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--accent);
  margin: 56px -40px;
  padding: 12px 40px;
  border-left: 2px solid var(--accent);
}

#thesis-root .pullquote .attr {
  display: block;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-style: normal;
  color: var(--muted);
  margin-top: 16px;
  font-weight: 500;
}

@media (max-width: 640px) {
  #thesis-root .pullquote { margin: 40px 0; font-size: 22px; padding: 8px 24px; }
}

/* COLLAPSIBLES */
#thesis-root details.expander {
  margin: 28px 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  padding: 0;
}

#thesis-root details.expander summary {
  list-style: none;
  cursor: pointer;
  padding: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink);
  font-weight: 500;
  transition: color 0.2s;
}

#thesis-root details.expander summary::-webkit-details-marker { display: none; }

#thesis-root details.expander summary:hover { color: var(--accent); }

#thesis-root details.expander summary .label {
  display: flex;
  align-items: center;
  gap: 14px;
}

#thesis-root details.expander summary .label .tag {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border: 1px solid var(--accent);
  border-radius: 2px;
}

#thesis-root details.expander summary .icon {
  font-family: var(--serif);
  font-size: 24px;
  color: var(--accent);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  line-height: 1;
  flex-shrink: 0;
}

#thesis-root details.expander[open] summary .icon {
  transform: rotate(45deg);
}

#thesis-root details.expander .content {
  padding: 8px 0 32px;
  animation: thesisFadeIn 0.4s ease;
}

@keyframes thesisFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

#thesis-root details.expander .content p:last-child { margin-bottom: 0; }

/* TABLE */
#thesis-root .position-table-wrap {
  margin: 48px -40px;
  overflow-x: auto;
}

@media (max-width: 760px) {
  #thesis-root .position-table-wrap { margin: 32px 0; }
}

#thesis-root table.position-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--body);
  font-size: 14px;
}

#thesis-root table.position-table th {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
  text-align: left;
  padding: 14px 16px;
  border-bottom: 1.5px solid var(--ink);
  white-space: nowrap;
}

#thesis-root table.position-table td {
  padding: 16px 16px;
  border-bottom: 1px solid var(--rule);
  color: var(--ink-soft);
  vertical-align: top;
  line-height: 1.5;
}

#thesis-root table.position-table td.ticker {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
}

#thesis-root table.position-table td.role {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

#thesis-root table.position-table tbody tr:hover {
  background: var(--paper-deep);
}

/* SUPPLY CHAIN */
#thesis-root .supply-chain {
  margin: 48px -40px;
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  padding: 36px 40px;
}

@media (max-width: 760px) {
  #thesis-root .supply-chain { margin: 32px 0; padding: 28px 24px; }
}

#thesis-root .supply-chain-title {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
}

#thesis-root .supply-layer {
  display: grid;
  grid-template-columns: 180px 1fr 80px;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule-soft);
  align-items: baseline;
}

#thesis-root .supply-layer:last-child { border-bottom: none; }

@media (max-width: 640px) {
  #thesis-root .supply-layer { grid-template-columns: 1fr; gap: 8px; padding: 14px 0; }
}

#thesis-root .supply-layer .layer-name {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
  letter-spacing: -0.01em;
}

#thesis-root .supply-layer .layer-desc {
  font-size: 14px;
  color: var(--muted-deep);
  line-height: 1.5;
}

#thesis-root .supply-layer .margin-tag {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 8px;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  justify-self: end;
}

#thesis-root .margin-tag.high {
  background: var(--accent);
  color: var(--paper);
}
#thesis-root .margin-tag.med {
  background: var(--signal);
  color: var(--paper);
}
#thesis-root .margin-tag.low {
  background: var(--rule);
  color: var(--muted-deep);
}

@media (max-width: 640px) {
  #thesis-root .supply-layer .margin-tag { justify-self: start; }
}

/* METRICS */
#thesis-root .metric-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin: 48px -40px;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

@media (max-width: 760px) {
  #thesis-root .metric-row { margin: 32px 0; grid-template-columns: 1fr; }
}

#thesis-root .metric {
  padding: 28px 24px;
  border-right: 1px solid var(--rule);
  text-align: center;
}

#thesis-root .metric:last-child { border-right: none; }

@media (max-width: 760px) {
  #thesis-root .metric { border-right: none; border-bottom: 1px solid var(--rule); }
  #thesis-root .metric:last-child { border-bottom: none; }
}

#thesis-root .metric .value {
  font-family: var(--serif);
  font-size: 44px;
  font-weight: 500;
  line-height: 1;
  color: var(--accent);
  letter-spacing: -0.03em;
  margin-bottom: 8px;
  font-feature-settings: "lnum" 1, "tnum" 1;
}

#thesis-root .metric .label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-deep);
  line-height: 1.4;
}

/* KILL LIST */
#thesis-root .kill-list {
  list-style: none;
  margin: 32px 0;
}

#thesis-root .kill-list li {
  padding: 20px 0 20px 32px;
  border-bottom: 1px solid var(--rule);
  position: relative;
  color: var(--ink-soft);
}

#thesis-root .kill-list li::before {
  content: '×';
  position: absolute;
  left: 0;
  top: 18px;
  color: var(--accent);
  font-size: 22px;
  font-family: var(--serif);
  line-height: 1;
}

#thesis-root .kill-list strong {
  display: block;
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

#thesis-root .kill-list .prob {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 8px;
  display: block;
}

/* FOOTER */
#thesis-root footer.colophon {
  max-width: 760px;
  margin: 80px auto 0;
  padding: 60px 32px 80px;
  border-top: 1px solid var(--rule);
  position: relative;
  z-index: 2;
}

#thesis-root footer.colophon .footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 48px;
}

@media (max-width: 640px) {
  #thesis-root footer.colophon .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}

#thesis-root footer.colophon h4 {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

#thesis-root footer.colophon p {
  font-size: 15px;
  color: var(--muted-deep);
  line-height: 1.6;
  margin-bottom: 12px;
}

#thesis-root footer.colophon .disclaimer {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.04em;
  line-height: 1.7;
  padding-top: 32px;
  border-top: 1px solid var(--rule);
}

#thesis-root footer.colophon .signature {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

#thesis-root footer.colophon .signature .monogram {
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--accent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--accent);
}

#thesis-root footer.colophon .signature .name {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: -0.01em;
}

#thesis-root footer.colophon .signature .tagline {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-top: 4px;
}

/* PROGRESS BAR */
.thesis-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--accent);
  z-index: 200;
  transition: width 0.1s ease-out;
  width: 0%;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  #thesis-root nav.topbar { padding: 12px 20px; }
  #thesis-root nav.topbar .meta { display: none; }
  #thesis-root .hero { padding: 140px 24px 60px; }
  #thesis-root article { padding: 80px 24px 80px; }
  #thesis-root .tldr-section { padding: 0 24px; }
  #thesis-root .toc { padding: 0 24px; }
  #thesis-root footer.colophon { padding: 48px 24px 60px; }
  #thesis-root article p:first-of-type::first-letter { font-size: 3.5em; }
}
`;

export default function PhotonicInterconnectPage() {
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      const bar = document.getElementById('thesis-progress');
      if (bar) bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div id="thesis-root">
        <div className="thesis-progress-bar" id="thesis-progress" />

        <nav className="topbar">
          <div className="brand">
            <span className="monogram">cc</span>
            <span>cable.capital</span>
          </div>
          <div className="meta">
            <a href="#tldr">Summary</a>
            <a href="#positions">Positions</a>
            <a href="#i">Thesis</a>
            <span>May 2026</span>
          </div>
        </nav>

        <header className="hero">
          <div className="eyebrow">Investment Thesis &nbsp;·&nbsp; № 04</div>
          <h1>Photonic <em>interconnect</em></h1>
          <div className="deck">Light as the structural successor to copper in AI scale-up. The supply chain is locked, the buyer is locked, the timeline is named.</div>
          <div className="byline">
            <div>Author<span>Chris Cable</span></div>
            <div>Vehicle<span>CPC Consulting LLC</span></div>
            <div>Status<span>Active conviction</span></div>
            <div>Horizon<span>18 – 36 months</span></div>
          </div>
        </header>

        <section className="tldr-section" id="tldr">
          <div className="tldr-card">
            <div className="tldr-label">The thesis in one paragraph</div>
            <h2>Copper is at its physical limit for AI scale-up. Photonic interconnect, specifically co-packaged optics, is the multi-year architectural transition that replaces it.</h2>
            <p>The supply chain is structurally constrained at the laser and substrate layer, and NVIDIA has already moved to lock up capacity. The margin pool concentrates upstream, not at module assembly. The most resilient expression is laser-chip and substrate exposure with a defensive overlay in the fiber-glass supplier.</p>
            <p>This is not photonic compute, which remains a 2028+ moonshot. This is photonic interconnect, which is shipping now.</p>
            <div className="tldr-positions" id="positions">
              <div className="tldr-pos">
                <span className="ticker">COHR</span>
                <span className="role">Core</span>
                <span className="size">3 – 5%</span>
              </div>
              <div className="tldr-pos">
                <span className="ticker">LITE</span>
                <span className="role">Torque</span>
                <span className="size">1 – 2%</span>
              </div>
              <div className="tldr-pos">
                <span className="ticker">GLW</span>
                <span className="role">Defensive</span>
                <span className="size">2 – 4%</span>
              </div>
              <div className="tldr-pos">
                <span className="ticker">FN</span>
                <span className="role">Hedge</span>
                <span className="size">0 – 2%</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="toc">
          <div className="toc-label">Contents</div>
          <ul className="toc-list">
            <li><a href="#i"><span className="num">I.</span> The physics-economic case</a></li>
            <li><a href="#ii"><span className="num">II.</span> Where the margin pool sits</a></li>
            <li><a href="#iii"><span className="num">III.</span> Signals confirming the ramp</a></li>
            <li><a href="#iv"><span className="num">IV.</span> Indium phosphide as strategic commodity</a></li>
            <li><a href="#v"><span className="num">V.</span> Position construction</a></li>
            <li><a href="#vi"><span className="num">VI.</span> Kill conditions</a></li>
            <li><a href="#vii"><span className="num">VII.</span> Entry framework</a></li>
            <li><a href="#viii"><span className="num">VIII.</span> Connection to broader theses</a></li>
          </ul>
        </nav>

        <article>

          <section className="chapter" id="i">
            <div className="chapter-mark">Chapter I</div>
            <h2 className="chapter-title">The <em>physics-economic</em> case</h2>

            <p>AI training and inference at scale requires moving bytes between accelerators at bandwidths and distances that copper cannot support simultaneously. The relationship is not gradual. Copper bandwidth-distance product degrades nonlinearly. At 200G per lane, active electrical cables max out at roughly one to two meters of useful reach. NVIDIA's NVL72 fit in a single rack precisely because that geometry kept copper viable. The moment you scale beyond one rack, copper stops working.</p>

            <p>Vera Rubin Ultra NVL576 places eight racks side-by-side at nearly five meters wide. The decision to use co-packaged optics for rack-to-rack within NVL576, while keeping copper intra-rack, is a forced engineering choice, not a marketing preference. With Feynman NVL1152 in 2028, CPO expands further; the open question is whether intra-rack connections remain copper or also transition to optics. NVIDIA networking leadership has publicly said "it is still too early to discuss" the final NVL1152 design, but the trajectory is unambiguous: scale-up domains are growing, and copper's bandwidth-distance product cannot follow them.</p>

            <div className="pullquote">
              We need a lot more capacity for copper. We need a lot more capacity for optics. We need a lot more capacity for CPO.
              <span className="attr">Jensen Huang &nbsp;·&nbsp; GTC 2026 keynote</span>
            </div>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Deep dive</span> Why photonic compute is the wrong trade</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Photonic compute, where matrix multiplication runs through optical components, has been promised since the 1970s. Neurophos, Lightmatter, Lightelligence, and others have credible physics and real demonstrators. The issue is not whether the physics works. The issues are: precision ceilings imposed by analog noise and crosstalk, weight reconfiguration speed, lack of software ecosystem (CUDA), and the fact that matrix multiply is not the binding constraint in modern AI systems anyway. Memory bandwidth and interconnect are.</p>
                <p>This matters because it explains why Lightmatter pivoted to interconnect (Passage) while Neurophos still pursues pure compute. The market signal from inside the photonics ecosystem is clear: the money is in moving photons between chips, not doing math with them. The interconnect bet is in production. The compute bet is a 2028+ demonstrator with massive execution risk on software, yield, and system integration.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Deep dive</span> The thermodynamic frame</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Datacenters are heat engines running in reverse. Electricity in, computation out, heat rejected. The Landauer limit on computation per joule is roughly 10²⁰ operations per joule at room temperature. Current systems run at 10¹⁰. Ten orders of magnitude of theoretical headroom exist, which means the current energy panic is a transient state, not a steady state.</p>
                <p>The path that closes this gap fastest wins, and within the bridging technologies, photonic interconnect is the nearest-term win because the gap between optical and electrical energy-per-bit at distance is structural, not incremental. Moving a bit one meter electrically at 200G costs roughly 10-20x what it costs optically. Multiply that across a hyperscale datacenter and the case writes itself.</p>
              </div>
            </details>
          </section>

          <section className="chapter" id="ii">
            <div className="chapter-mark">Chapter II</div>
            <h2 className="chapter-title">Where the <em>margin pool</em> sits</h2>

            <p>The CPO supply chain decomposes into five layers, with structurally different margin profiles. Understanding which layer captures rent and which commoditizes is the entire investment question.</p>

            <div className="supply-chain">
              <div className="supply-chain-title">Margin map · CPO supply stack</div>
              <div className="supply-layer">
                <div className="layer-name">Substrate (InP)</div>
                <div className="layer-desc">Indium phosphide wafer production. Structurally constrained, geopolitical premium.</div>
                <span className="margin-tag high">High</span>
              </div>
              <div className="supply-layer">
                <div className="layer-name">Laser chips (EMLs)</div>
                <div className="layer-desc">Electro-absorption modulated lasers at 200G+. Highest margin pool, single-supplier dynamics.</div>
                <span className="margin-tag high">High</span>
              </div>
              <div className="supply-layer">
                <div className="layer-name">Switch silicon</div>
                <div className="layer-desc">CPO-integrated switching ASICs. Oligopolistic structure: Broadcom, Marvell, NVIDIA in-house.</div>
                <span className="margin-tag med">Strong</span>
              </div>
              <div className="supply-layer">
                <div className="layer-name">Module assembly</div>
                <div className="layer-desc">Transceiver packaging and integration. Commoditizing, margin compression from Chinese competition.</div>
                <span className="margin-tag low">Weak</span>
              </div>
              <div className="supply-layer">
                <div className="layer-name">Fiber and glass</div>
                <div className="layer-desc">Optical fiber, polishers, connectors. Stable margin, multi-architecture, decade-scale tailwind.</div>
                <span className="margin-tag med">Steady</span>
              </div>
            </div>

            <h3>The structural insight</h3>

            <p>Margin pools concentrate at upstream choke points where capacity is genuinely capital-intensive and time-constrained, <em>and</em> where Chinese competition is structurally blocked by IP or trade controls. The InP wafer layer and the laser chip layer satisfy both. Module assembly satisfies neither, which is why the transceiver assemblers compress to near-zero margin as Chinese suppliers (Innolight, Eoptolink) take share.</p>

            <p>The implication: do not play module assemblers as the photonics trade. Do not play the system OEMs (Dell, HPE, Supermicro), which face NVIDIA margin pressure. Play the upstream where the choke points are real.</p>
          </section>

          <section className="chapter" id="iii">
            <div className="chapter-mark">Chapter III</div>
            <h2 className="chapter-title">Signals confirming <em>the ramp</em></h2>

            <p>On March 2, 2026, NVIDIA committed approximately $2B to Coherent and $2B to Lumentum in equity, tied to multi-year purchase commitments and priority capacity access. This is the most important signal in the sector.</p>

            <div className="metric-row">
              <div className="metric">
                <div className="value">$4B</div>
                <div className="label">NVIDIA equity into<br />laser supply chain</div>
              </div>
              <div className="metric">
                <div className="value">4×</div>
                <div className="label">Coherent data center<br />book-to-bill ratio</div>
              </div>
              <div className="metric">
                <div className="value">2027</div>
                <div className="label">InP laser inventory<br />fully sold through</div>
              </div>
            </div>

            <p>When the dominant buyer simultaneously takes equity and locks in volume, three things are true: supply is the binding constraint, the volume ramp is real, and the buyer wants pricing discipline rather than letting suppliers extract monopoly rent. This is the clearest signal you get in deep tech.</p>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q3 FY26 prints</span> The order books</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p><strong>Coherent (May 6, 2026).</strong> Q3 FY26 revenue $1.806B, up 21% YoY. Non-GAAP gross margin 39.6%, within 40 basis points of the 40% long-term target. Q4 guidance suggests breach of the 40% threshold next print. Data center book-to-bill exceeds 4x. InP lasers sold out through 2027.</p>
                <p><strong>Lumentum (May 5, 2026).</strong> Revenue doubled YoY to $808M. Non-GAAP EPS $2.37 vs. $2.27 expected. Operating margins 32.2%. Management acknowledged that demand across multiple product lines far exceeds capacity, with supply constraints persisting throughout calendar 2026. CPO-related revenue expected at roughly $50M in Q4 2026, with hundreds of millions in CPO orders converting to revenue in 1H 2027.</p>
                <p><strong>Sector pattern.</strong> Record earnings followed by collective post-print decline reflects "buy the rumor, sell the news" dynamics overlaid on capacity-bottleneck disappointment. The fundamentals are strengthening while sentiment is consolidating. This is the entry window.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Engineering moat</span> Coherent's structural margin engine</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Coherent's narrative is not capacity-led, it is margin-led, and this is the most under-appreciated aspect of the trade. Two engineering facts are written into the production process:</p>
                <p><strong>1.6T transceiver upgrade.</strong> 1.6T transceivers carry structurally higher gross margins than 800G. As the upgrade ramps through 2026-2028, mix shift compounds margin without requiring price increases.</p>
                <p><strong>6-inch InP wafers.</strong> Coherent's transition from 3-inch to 6-inch indium phosphide wafers yields over 4x the chips per wafer at under half the cost. This is process engineering, not financial adjustment, and it is irreversible once implemented. The capacity unlock and margin unlock arrive together.</p>
                <p>This is the difference between Coherent and Lumentum as positions. Lumentum is a volume-and-price torque play on a constrained input. Coherent is a structural margin compounder with a defined unlock path that does not depend on market sentiment or pricing power.</p>
              </div>
            </details>
          </section>

          <section className="chapter" id="iv">
            <div className="chapter-mark">Chapter IV</div>
            <h2 className="chapter-title">Indium phosphide as <em>strategic commodity</em></h2>

            <p>Indium phosphide is the substrate for high-performance optical transceivers and lasers. It is also the next material to enter the strategic-commodity conversation. AXT has raised $100M for production expansion of its Beijing subsidiary, planning to double InP capacity by 2026. Sumitomo Electric plans to increase production capacity 40% by 2027. China has identified InP as a strategic bottleneck and is building capacity aggressively. The pattern matches the gallium and germanium playbook.</p>

            <p>If the US-China decoupling trajectory continues, Western-aligned InP capacity (Coherent, Lumentum, IQE) gets a strategic premium that is not yet fully priced in. This connects directly to the broader Hormuz-cascade thinking on commodity bottlenecks: CPO is, at the substrate level, an indium phosphide story, and InP follows the same scarcity-plus-geopolitics dynamic that drives the energy and fertilizer theses. The export-control overlay is not in current consensus pricing for these names.</p>

            <p>This is also why Coherent's vertical integration into its own InP wafer production matters more than the market currently understands. Internalizing the substrate hedges against both Chinese capacity dumping and Western export-control fragmentation.</p>
          </section>

          <section className="chapter" id="v">
            <div className="chapter-mark">Chapter V</div>
            <h2 className="chapter-title">Position <em>construction</em></h2>

            <p>The portfolio expression is a four-position barbell. Core conviction in the structural margin compounder, torque in the laser shortage, defensive anchor in the fiber substrate, and an optional hedge in module assembly.</p>

            <div className="position-table-wrap">
              <table className="position-table">
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Role</th>
                    <th>Size</th>
                    <th>Horizon</th>
                    <th>Catalyst</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ticker">COHR</td>
                    <td className="role">Core conviction</td>
                    <td>3–5%</td>
                    <td>18–36 mo</td>
                    <td>40% GM breach, InP transition, 1.6T mix shift</td>
                  </tr>
                  <tr>
                    <td className="ticker">LITE</td>
                    <td className="role">Torque</td>
                    <td>1–2%</td>
                    <td>12–24 mo</td>
                    <td>CPO laser ramp 2H26, US InP fab expansion</td>
                  </tr>
                  <tr>
                    <td className="ticker">GLW</td>
                    <td className="role">Defensive</td>
                    <td>2–4%</td>
                    <td>3–7 yr</td>
                    <td>NVIDIA fiber partnership, multi-arch compound</td>
                  </tr>
                  <tr>
                    <td className="ticker">FN</td>
                    <td className="role">Hedge</td>
                    <td>0–2%</td>
                    <td>12–24 mo</td>
                    <td>Module volume ramp, winner-agnostic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">COHR</span> The structural margin compounder</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>The pure margin-compounder bet. Coherent captures both the laser layer and the substrate layer, with a defined gross margin trajectory through the 1.6T mix shift and the 6-inch InP transition. The April-May 2026 sell-off creates a more workable entry than the highs from earlier in the year. Q4 FY26 guidance implies a formal breach of 40% non-GAAP gross margin, which is the catalyst that re-rates the multiple.</p>
                <p><strong>Sizing.</strong> 3-5% of portfolio. This is the position where the structural advantage is most concrete and the downside is mitigated by diversified end-market exposure (industrial, communications, materials), which provides a floor that pure-play LITE does not have.</p>
                <p><strong>Risks.</strong> Integration overhang from the II-VI merger; capacity execution risk on the InP wafer transition; cyclical exposure in non-datacenter segments; concentration risk if NVIDIA's supplier strategy shifts toward in-housing.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">LITE</span> The laser shortage torque</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>The pure-play upstream laser bet. The 200G EML supply position is structurally narrow, and Lumentum is currently the only volume supplier at this speed. The CEO has called 2026 a breakout year for laser chip sales, and the company received the largest single purchase commitment for ultra-high-power CPO lasers in its history. Indium phosphide capacity is being added in the US fab.</p>
                <p>This is the right position to size smaller and trim into strength rather than ride. The historical analog is the JDSU cycle: when the laser shortage resolves, the multiple compresses fast. The setup is a 12-24 month volume-and-price arc, not a decade-long compound.</p>
                <p><strong>Sizing.</strong> 1-2% of portfolio. Higher torque, shorter horizon, trim discipline required.</p>
                <p><strong>Risks.</strong> Dilution overhang from recent financing; cycle reversal as capacity catches demand; pricing discipline imposed by NVIDIA equity stake; competitive entry from Coherent at the 200G layer.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">GLW</span> The fiber substrate anchor</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>The fiber-glass substrate is the slowest-moving but most durable layer. NVIDIA's partnership with Corning lays the groundwork for replacing thousands of copper cables inside Rubin-class systems with fiber optics. This exposure compounds regardless of which laser supplier wins, which switch silicon vendor wins, or which CPO architecture variant becomes standard. Glass is the substrate of substrates.</p>
                <p><strong>Sizing.</strong> 2-4% of portfolio as a longer-duration anchor. The multi-architecture compounding profile here is what makes Corning the cleanest "didn't pick a winner" position with actual upside, distinct from a passive ETF.</p>
                <p><strong>Risks.</strong> Slower growth profile than the laser names; legacy display and consumer-glass exposure dilutes the photonics signal; the upside is steady rather than explosive.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">FN</span> The winner-agnostic hedge</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Fabrinet sits at module assembly, which the upstream margin analysis identifies as a commoditizing layer. But it remains the dominant non-Chinese assembler with deep relationships across Coherent, Lumentum, and others. It is a winner-agnostic exposure to module volume.</p>
                <p><strong>Sizing.</strong> 0-2% of portfolio. This is a hedge against picking the wrong upstream winner. Optional rather than core.</p>
                <p><strong>Risks.</strong> Structural margin compression as Chinese assemblers take share; customer concentration in the photonics names; thin moat at the assembly layer.</p>
              </div>
            </details>
          </section>

          <section className="chapter" id="vi">
            <div className="chapter-mark">Chapter VI</div>
            <h2 className="chapter-title">Kill <em>conditions</em></h2>

            <p>A disciplined thesis names its kill conditions explicitly. The trade fails under any of the following:</p>

            <ul className="kill-list">
              <li>
                <strong>Architectural pivot</strong>
                NVIDIA or hyperscalers abandon CPO in favor of a different scale-up architecture (long-reach copper variants, alternative interconnect fabrics, in-rack-only scaling). Monitor: Rubin Ultra deployment configurations, NVL1152 architectural disclosures.
                <span className="prob">Probability: Low</span>
              </li>
              <li>
                <strong>InP substitution</strong>
                A non-InP laser technology (VCSEL variants, silicon photonics with bonded gain media, novel materials) reaches volume manufacturability at the required speeds. Monitor: research literature on alternative substrates, hyperscaler design wins for non-InP solutions.
                <span className="prob">Probability: Moderate over 5+ yr, low near-term</span>
              </li>
              <li>
                <strong>Chinese capacity flood</strong>
                AXT and other Chinese InP suppliers reach Western-equivalent quality and volume, collapsing the geopolitical premium. Monitor: yield improvements, hyperscaler qualification disclosures, export control evolution.
                <span className="prob">Probability: Moderate over 3–5 yr</span>
              </li>
              <li>
                <strong>Demand cycle reversal</strong>
                AI capex cycle peaks earlier than expected, hyperscaler builds slow, GPU demand normalizes. Monitor: hyperscaler capex guidance, GPU spot pricing, H100/H200 secondary market.
                <span className="prob">Probability: Low through 2027, rising thereafter</span>
              </li>
              <li>
                <strong>NVIDIA insourcing</strong>
                NVIDIA pivots from equity-and-purchase-agreement to acquisition of Coherent or Lumentum, or builds in-house laser capacity. Would be a positive event for current holders in either direction.
                <span className="prob">Probability: Low (regulatory friction)</span>
              </li>
            </ul>
          </section>

          <section className="chapter" id="vii">
            <div className="chapter-mark">Chapter VII</div>
            <h2 className="chapter-title">Entry <em>framework</em></h2>

            <p>The cleanest entry is on a photonics-sector pullback driven by one of the names missing on execution. The May 2026 print pattern, record earnings followed by collective post-print decline, suggests the sector is consolidating even as fundamentals improve. This is the buy-the-pullback setup, not the buy-the-breakout setup.</p>

            <h3>Tactical sequence</h3>
            <p><strong>Initiate Coherent</strong> at 5-7% off recent highs, with a defined add-on at the formal 40% gross margin breach (catalyst, likely next earnings).</p>
            <p><strong>Scale Lumentum</strong> on capacity-disappointment days, with discipline to trim into strength rather than hold through cycle peak.</p>
            <p><strong>Build Corning</strong> steadily as a longer-duration anchor, less timing-sensitive.</p>
            <p><strong>Treat Fabrinet</strong> as optional rather than required.</p>

            <h3>Monitoring cadence</h3>
            <p>Quarterly: gross margin trajectory, book-to-bill, capacity guidance, CPO revenue disclosure.</p>
            <p>NVIDIA quarterly prints: CPO product disclosures, Rubin deployment configurations, supply chain commentary.</p>
            <p>Hyperscaler capex guidance as leading indicator for sector volume.</p>
            <p>InP wafer pricing and Chinese capacity announcements as geopolitical premium tracker.</p>
          </section>

          <section className="chapter" id="viii">
            <div className="chapter-mark">Chapter VIII</div>
            <h2 className="chapter-title">Connection to the <em>broader architecture</em></h2>

            <p>Photonic interconnect sits at the intersection of several existing theses and reinforces rather than competes with them.</p>

            <p><strong>Cache-hierarchy and host-process inversion.</strong> If inference middleware moves to cache-aware routing and the host process inverts (neural nets as host, CPUs as co-processor), interconnect bandwidth between accelerators and memory becomes the binding constraint. Photonic interconnect is the structural enabler of this inversion.</p>

            <p><strong>Atoms over bits.</strong> InP substrate scarcity, fiber glass capacity, and laser fab buildout are physical-asset stories. The CPO supply chain is a real-world constraint play dressed up as a tech trade.</p>

            <p><strong>Geopolitical commodity stack.</strong> Indium phosphide joins gallium, germanium, and rare earth magnets as strategic materials with Western-aligned premia. The Hormuz-adjacent commodity framework applies cleanly.</p>

            <p><strong>Verifiable inference and agent-native infrastructure.</strong> Cheaper, faster, more energy-efficient inference compounds demand for the verification and orchestration layers above it. Photonic interconnect feeds the lower stack that enables higher-stack thesis monetization.</p>

            <div className="pullquote">
              Light wins. The question is which layer of the optical stack captures the rent. The answer is the substrate and the laser, not the module or the system.
              <span className="attr">Honest summary</span>
            </div>

            <p>If one position: Coherent. If three: Coherent, Lumentum, Corning. The trade is not a bet on a moonshot. It is a bet on a forced architectural transition where the supply chain is locked, the buyer is locked, the timeline is named, and the margin pools concentrate in a small number of identifiable upstream players. The thesis fails only if the physics changes or the geopolitics resolves, both of which are low-probability over the relevant horizon.</p>
          </section>

        </article>

        <footer className="colophon">
          <div className="footer-grid">
            <div>
              <h4>Author</h4>
              <div className="signature">
                <span className="monogram">cc</span>
                <div>
                  <span className="name">Chris Cable</span>
                  <span className="tagline">Thesis architect</span>
                </div>
              </div>
              <p>Investment research published under the cable.capital brand. Operated through CPC Consulting LLC (Wyoming).</p>
            </div>
            <div>
              <h4>Series</h4>
              <p>This is № 04 in the cable.capital thesis series. Adjacent pieces: Cache-hierarchy and host-process inversion, Indium phosphide as strategic commodity, Biology as the next computational substrate.</p>
            </div>
          </div>
          <div className="disclaimer">
            Prepared by CPC Consulting LLC. Internal investment research. Not financial advice. Names referenced reflect personal positioning and do not constitute solicitation. Figures and signals current as of May 2026 and subject to revision. © cable.capital
          </div>
        </footer>

      </div>
    </>
  );
}
