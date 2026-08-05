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

#thesis-root article a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  transition: border-color 0.2s;
}
#thesis-root article a:hover { border-bottom-color: var(--accent); }

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

@media (max-width: 640px) {
  #thesis-root .pullquote { margin: 40px 0; font-size: 22px; padding: 8px 24px; }
}

/* TENET / NUMBERED LIST */
#thesis-root .tenet-list {
  list-style: none;
  counter-reset: tenet;
  margin: 36px 0;
}

#thesis-root .tenet-list li {
  padding: 22px 0 22px 58px;
  border-bottom: 1px solid var(--rule);
  position: relative;
  color: var(--ink-soft);
}

#thesis-root .tenet-list li::before {
  counter-increment: tenet;
  content: counter(tenet, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 24px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 0.04em;
}

#thesis-root .tenet-list strong {
  display: block;
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

/* PLAIN / FILTER LIST */
#thesis-root .plain-list {
  list-style: none;
  margin: 24px 0 28px;
}

#thesis-root .plain-list li {
  position: relative;
  padding: 12px 0 12px 28px;
  border-bottom: 1px solid var(--rule-soft);
  color: var(--ink-soft);
  font-size: 17px;
  line-height: 1.5;
}

#thesis-root .plain-list li:last-child { border-bottom: none; }

#thesis-root .plain-list li::before {
  content: '\\2192';
  position: absolute;
  left: 0;
  top: 12px;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--accent);
}

/* DUAL PANEL */
#thesis-root .dual-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 40px -40px;
}

@media (max-width: 760px) {
  #thesis-root .dual-panel { margin: 32px 0; }
}
@media (max-width: 640px) {
  #thesis-root .dual-panel { grid-template-columns: 1fr; }
}

#thesis-root .panel {
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  padding: 30px 30px;
}

#thesis-root .panel .panel-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}

#thesis-root .panel h4 {
  font-family: var(--serif);
  font-size: 21px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}

#thesis-root .panel p {
  font-size: 15px;
  color: var(--muted-deep);
  line-height: 1.6;
  margin-bottom: 16px;
}

#thesis-root .panel ul { list-style: none; }

#thesis-root .panel ul li {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.03em;
  color: var(--muted-deep);
  padding: 6px 0 6px 16px;
  position: relative;
  text-transform: uppercase;
  line-height: 1.4;
}

#thesis-root .panel ul li::before {
  content: '·';
  position: absolute;
  left: 2px;
  color: var(--accent);
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

#thesis-root table.position-table td.layer {
  font-family: var(--serif);
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  white-space: nowrap;
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

/* METRICS */
#thesis-root .metric-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin: 48px -40px;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

#thesis-root .metric-row.metrics-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 760px) {
  #thesis-root .metric-row { margin: 32px 0; grid-template-columns: 1fr; }
  #thesis-root .metric-row.metrics-4 { grid-template-columns: 1fr 1fr; }
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

#thesis-root .metric-row.metrics-4 .metric { padding: 26px 16px; }
#thesis-root .metric-row.metrics-4 .value { font-size: 34px; }

#thesis-root .metric .label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-deep);
  line-height: 1.4;
}

/* DISCIPLINE STATES */
#thesis-root .disc-states {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin: 40px -40px;
  border: 1px solid var(--rule);
}

@media (max-width: 760px) { #thesis-root .disc-states { margin: 32px 0; } }
@media (max-width: 640px) { #thesis-root .disc-states { grid-template-columns: 1fr; } }

#thesis-root .disc-state {
  padding: 26px 24px;
  border-right: 1px solid var(--rule);
}

#thesis-root .disc-state:last-child { border-right: none; }

@media (max-width: 640px) {
  #thesis-root .disc-state { border-right: none; border-bottom: 1px solid var(--rule); }
  #thesis-root .disc-state:last-child { border-bottom: none; }
}

#thesis-root .disc-state .st-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

#thesis-root .disc-state p {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.55;
  margin: 0;
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

/* MONITOR GRID */
#thesis-root .monitor-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 40px;
  margin: 40px 0;
}

@media (max-width: 640px) { #thesis-root .monitor-grid { grid-template-columns: 1fr; gap: 28px; } }

#thesis-root .monitor-card {
  border-top: 2px solid var(--ink);
  padding-top: 16px;
}

#thesis-root .monitor-card h4 {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

#thesis-root .monitor-card ul { list-style: none; }

#thesis-root .monitor-card ul li {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.5;
  padding: 8px 0 8px 16px;
  position: relative;
  border-bottom: 1px solid var(--rule-soft);
}

#thesis-root .monitor-card ul li:last-child { border-bottom: none; }

#thesis-root .monitor-card ul li::before {
  content: '·';
  position: absolute;
  left: 2px;
  color: var(--accent);
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
            <span>August 2026</span>
          </div>
        </nav>

        <header className="hero">
          <div className="eyebrow">Investment Thesis &nbsp;·&nbsp; № 04</div>
          <h1>Photonic <em>interconnect</em></h1>
          <div className="deck">Light can win while optical suppliers fail to capture the rent.</div>
          <div className="byline">
            <div>Author<span>Chris Cable</span></div>
            <div>Vehicle<span>CPC Consulting LLC</span></div>
            <div>Status<span>Active conviction</span></div>
            <div>Horizon<span>18 – 36 months</span></div>
          </div>
        </header>

        <section className="tldr-section" id="tldr">
          <div className="tldr-card">
            <div className="tldr-label">The thesis</div>
            <h2>Own the companies that get paid as the copper boundary retreats&mdash;without paying a permanent multiple for a temporary shortage.</h2>
            <p>AI systems are becoming too large to keep every important connection inside copper&rsquo;s efficient reach. That makes photonic interconnect one of the few emerging-compute transitions already being forced by deployed system architecture rather than promised by a laboratory roadmap. The technology conclusion is easy: more of the AI system will be connected by light.</p>
            <p>The investment conclusion is harder. NVIDIA is funding multiple vendors, capacity is expanding, and co-packaged optics changes which lasers and components are required. The right exposure is therefore not &ldquo;CPO&rdquo; in the abstract. It is a portfolio of qualified manufacturing platforms that can survive changes in architecture, mix and pricing.</p>
            <div className="tldr-positions" id="positions">
              <div className="tldr-pos">
                <span className="ticker">COHR</span>
                <span className="role">Core</span>
                <span className="size">3 – 5%</span>
              </div>
              <div className="tldr-pos">
                <span className="ticker">LITE</span>
                <span className="role">Scarcity</span>
                <span className="size">1 – 2%</span>
              </div>
              <div className="tldr-pos">
                <span className="ticker">GLW</span>
                <span className="role">Diversifier</span>
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
            <li><a href="#i"><span className="num">I.</span> AI has become a data-movement machine</a></li>
            <li><a href="#ii"><span className="num">II.</span> A hybrid machine</a></li>
            <li><a href="#iii"><span className="num">III.</span> Three transitions hiding inside one story</a></li>
            <li><a href="#iv"><span className="num">IV.</span> What you need to believe</a></li>
            <li><a href="#v"><span className="num">V.</span> NVIDIA validates the market&mdash;and threatens the margin</a></li>
            <li><a href="#vi"><span className="num">VI.</span> The stack is not one trade</a></li>
            <li><a href="#vii"><span className="num">VII.</span> Four ways to own the boundary</a></li>
            <li><a href="#viii"><span className="num">VIII.</span> The ramp is already in the income statement</a></li>
            <li><a href="#ix"><span className="num">IX.</span> A correct technology thesis can still be a bad trade</a></li>
            <li><a href="#x"><span className="num">X.</span> Watch the boundary, the mix and the cash</a></li>
          </ul>
        </nav>

        <article>

          <section className="chapter" id="i">
            <div className="chapter-mark">Chapter I</div>
            <h2 className="chapter-title">AI has become a <em>data-movement</em> machine</h2>

            <p>The industry measures AI infrastructure in FLOPs. Increasingly, the scarce resource is the ability to keep those FLOPs fed.</p>

            <p>Copper is not disappearing. It remains cheaper, simpler and better over short distances. But each generation of AI infrastructure joins more accelerators across more racks. At the edge of that expanding machine, the electrical link becomes too lossy, too hot and too difficult to route. The marginal connection has to become optical.</p>

            <h3>Reach</h3>
            <p>At higher lane rates, copper&rsquo;s useful distance collapses. The equalization required to recover the signal consumes power and adds complexity. What works inside a rack does not cleanly extend across a row of racks.</p>

            <h3>Power</h3>
            <p>Every watt spent recovering an electrical signal is a watt unavailable to compute. As cluster power approaches the limits of a building&mdash;and then a grid connection&mdash;interconnect efficiency stops being a component detail.</p>

            <h3>Density</h3>
            <p>Larger scale-up domains require more links, more faceplate bandwidth and more routing. Copper cables become bulky; pluggable optics push the limits of the switch faceplate; board traces between an ASIC and a module become an electrical problem of their own.</p>

            <p>The result is not a universal replacement cycle. It is a moving boundary.</p>

            <div className="pullquote">
              Copper owns the shortest link. Light captures the next one. Every larger AI system moves that boundary inward.
            </div>
          </section>

          <section className="chapter" id="ii">
            <div className="chapter-mark">Chapter II</div>
            <h2 className="chapter-title">A <em>hybrid</em> machine</h2>

            <p>The future AI system is neither all-copper nor all-optical. It uses each medium where its physics are cheapest.</p>

            <div className="dual-panel">
              <div className="panel">
                <div className="panel-label">The local medium</div>
                <h4>Copper</h4>
                <p>Copper remains the default inside the smallest practical domain. It is low latency, inexpensive, serviceable and requires no conversion between electrons and photons.</p>
                <ul>
                  <li>Best at short reach</li>
                  <li>Cheapest when the electrical channel still closes</li>
                  <li>Likely to persist within racks and packages for years</li>
                </ul>
              </div>
              <div className="panel">
                <div className="panel-label">The expansion medium</div>
                <h4>Optics</h4>
                <p>Optics pays a conversion cost, then transports bandwidth farther with lower propagation loss. Its advantage grows with distance, lane rate and the size of the connected domain.</p>
                <ul>
                  <li>Best when bandwidth must travel</li>
                  <li>Increasingly necessary between racks and switches</li>
                  <li>Pulls optical engines closer to the compute and networking silicon</li>
                </ul>
              </div>
            </div>

            <p>This distinction matters because it changes the bet. We do not need copper demand to collapse. We need the AI system to keep getting larger.</p>
          </section>

          <section className="chapter" id="iii">
            <div className="chapter-mark">Chapter III</div>
            <h2 className="chapter-title">Three transitions hiding inside <em>one story</em></h2>

            <p>&ldquo;Co-packaged optics&rdquo; is often used as shorthand for the entire optical buildout. It is only one layer of it.</p>

            <h3>01 — Copper to optical links</h3>
            <p>This is the highest-conviction transition. It happens whenever a required connection crosses the bandwidth&ndash;distance&ndash;power boundary.</p>
            <p>NVIDIA&rsquo;s <a href="https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/" target="_blank" rel="noopener noreferrer">Rubin Ultra NVL576</a> is the architectural proof: eight racks joined into one 576-GPU NVLink domain using both copper and direct optical connections. The system is hybrid because the physics are hybrid.</p>

            <h3>02 — Pluggable to co-packaged optics</h3>
            <p>In a traditional optical switch, an electrical signal travels across the board before a pluggable module converts it to light. At higher speeds, that electrical journey becomes costly.</p>
            <p>CPO moves the optical engine next to the switching ASIC. The electrical path shrinks; bandwidth density improves; power falls. But serviceability gets harder and a failure sits closer to an expensive chip. External laser modules, redundancy and improved packaging are attempts to recover that operational flexibility.</p>
            <p>NVIDIA says its <a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Vera-Rubin-Ramps-Into-Full-Production-to-Power-Agentic-AI-Factories-Worldwide/default.aspx" target="_blank" rel="noopener noreferrer">Spectrum-X Ethernet Photonics switches</a> are in production. That validates CPO in scale-out networking. It does not mean every optical link immediately becomes co-packaged.</p>

            <h3>03 — Optical networking to optical scale-up</h3>
            <p>Data centers have used optics for years. The new frontier is light entering the tightly coupled scale-up domain: the fabric that makes hundreds of accelerators behave more like one machine.</p>
            <p>This is the strategically important transition. Scale-out moves jobs among machines. Scale-up changes the size of the machine itself.</p>
          </section>

          <section className="chapter" id="iv">
            <div className="chapter-mark">Chapter IV</div>
            <h2 className="chapter-title">What you need to <em>believe</em></h2>

            <ul className="tenet-list">
              <li>
                <strong>Scale-up domains keep growing</strong>
                Frontier training and inference continue to benefit from larger, more tightly connected accelerator domains rather than fragmenting entirely into small independent systems.
              </li>
              <li>
                <strong>Copper&rsquo;s boundary is physical</strong>
                Better cables, retimers and signaling extend copper, but do not remove the loss, reach and power trade-off at each higher lane rate.
              </li>
              <li>
                <strong>Optical content grows faster than unit efficiency</strong>
                New architectures may use fewer lasers per unit of bandwidth, particularly centralized continuous-wave sources. Total system bandwidth and link count must grow quickly enough for supplier value per AI system to rise anyway.
              </li>
              <li>
                <strong>Qualified manufacturing remains scarce</strong>
                Capital alone cannot instantly reproduce epitaxy, six-inch InP yield, reliable high-power lasers, advanced packaging or hyperscaler qualification.
              </li>
              <li>
                <strong>Suppliers retain some of the economics</strong>
                NVIDIA and hyperscalers do not use multisourcing, purchase commitments and customer-funded capacity to capture all of the benefit themselves.
              </li>
            </ul>

            <p>The first four make photonics inevitable. The fifth makes it investable.</p>
          </section>

          <section className="chapter" id="v">
            <div className="chapter-mark">Chapter V</div>
            <h2 className="chapter-title">NVIDIA validates the market&mdash;and <em>threatens the margin</em></h2>

            <p>In March 2026, NVIDIA committed $2 billion each to <a href="https://www.coherent.com/news/press-releases/nvidia-and-coherent-announce-strategic-partnership" target="_blank" rel="noopener noreferrer">Coherent</a> and <a href="https://investor.lumentum.com/financial-news-releases/news-details/2026/NVIDIA-Announces-Strategic-Partnership-With-Lumentum-to-Develop-State-of-the-Art-Optics-Technology/default.aspx" target="_blank" rel="noopener noreferrer">Lumentum</a>, alongside purchase commitments and access to future capacity. It has since announced a separate $2 billion investment and silicon-photonics collaboration with <a href="https://nvidianews.nvidia.com/news/nvidia-ai-ecosystem-expands-as-marvell-joins-forces-through-nvlink-fusion" target="_blank" rel="noopener noreferrer">Marvell</a>.</p>

            <p>This is the strongest possible demand signal short of reported revenue. The dominant buyer is underwriting the supply chain.</p>

            <p>It is also a warning.</p>

            <h3>Demand is real</h3>
            <p>NVIDIA does not finance multiple optical suppliers unless it expects to consume their output. The roadmap has crossed from engineering interest into procurement.</p>

            <h3>Supply is constrained</h3>
            <p>High-performance lasers and InP devices require fabs, process knowledge, yield learning and lengthy qualification. The constraint cannot be solved with a purchase order alone.</p>

            <h3>The buyer wants leverage</h3>
            <p>Multiple funded suppliers reduce dependence on any one vendor. Capacity access and purchase commitments can improve utilization while limiting scarcity pricing.</p>

            <div className="pullquote">
              NVIDIA is not choosing the winner. It is making sure there are several.
            </div>

            <p>The original version of this thesis treated a &ldquo;locked&rdquo; supply chain as proof of supplier power. The sharper interpretation is that NVIDIA is industrializing a bottleneck before the bottleneck can tax the entire platform.</p>
          </section>

          <section className="chapter" id="vi">
            <div className="chapter-mark">Chapter VI</div>
            <h2 className="chapter-title">The stack is not <em>one trade</em></h2>

            <p>The bottleneck will move.</p>

            <div className="position-table-wrap">
              <table className="position-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>What creates value</th>
                    <th>What destroys value</th>
                    <th>Read-through</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="layer">InP substrate</td>
                    <td>Crystal quality, six-inch availability, qualification</td>
                    <td>New capacity, export friction, customer concentration</td>
                    <td>Important input; not the whole moat</td>
                  </tr>
                  <tr>
                    <td className="layer">Laser/device fab</td>
                    <td>Epitaxy, yield, reliability, product breadth</td>
                    <td>Mix shifts, price erosion, customer-funded oversupply</td>
                    <td>Highest potential rent pool</td>
                  </tr>
                  <tr>
                    <td className="layer">Optical engine</td>
                    <td>Integration, packaging, thermal performance</td>
                    <td>Standardization, foundry capture, serviceability failures</td>
                    <td>Large opportunity; architecture-sensitive</td>
                  </tr>
                  <tr>
                    <td className="layer">Module assembly</td>
                    <td>Yield, complexity, execution at volume</td>
                    <td>Commoditization and Asian competition</td>
                    <td>Lower margin, but not zero value</td>
                  </tr>
                  <tr>
                    <td className="layer">Fiber/connectivity</td>
                    <td>Density, connectorization, installation ecosystem</td>
                    <td>Capacity outrunning buildouts</td>
                    <td>Broadest architecture exposure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>At one moment it may be substrate. At another it may be 200G EML yield, high-power CW lasers, packaging, connectors or installation. A robust investment should own manufacturing capability that can follow the bottleneck&mdash;not merely the component currently in shortage.</p>
          </section>

          <section className="chapter" id="vii">
            <div className="chapter-mark">Chapter VII</div>
            <h2 className="chapter-title">Four ways to <em>own the boundary</em></h2>

            <p>It is a portfolio of qualified manufacturing platforms that can survive changes in architecture, mix and pricing.</p>

            <div className="position-table-wrap">
              <table className="position-table">
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Role</th>
                    <th>Max band</th>
                    <th>Why it belongs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ticker">COHR</td>
                    <td className="role">Core</td>
                    <td>3–5%</td>
                    <td>It can get paid across more than one optical architecture</td>
                  </tr>
                  <tr>
                    <td className="ticker">LITE</td>
                    <td className="role">High-beta scarcity</td>
                    <td>1–2%</td>
                    <td>Current scarcity economics are visible in the numbers</td>
                  </tr>
                  <tr>
                    <td className="ticker">GLW</td>
                    <td className="role">Architecture diversifier</td>
                    <td>2–4%</td>
                    <td>Architecture can change while physical connections keep multiplying</td>
                  </tr>
                  <tr>
                    <td className="ticker">FN</td>
                    <td className="role">Timing hedge</td>
                    <td>0–2%</td>
                    <td>Transitions are mixed, and manufacturing complexity still has value</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">COHR</span> The platform</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Coherent is the broadest expression: EMLs, CW lasers, VCSELs, detectors, transceivers, silicon photonics, materials and volume six-inch InP device manufacturing.</p>
                <p><strong>Why it belongs:</strong> it can get paid across more than one optical architecture.</p>
                <p><strong>What must happen:</strong> mix and yield must lift free cash flow after the expansion capex.</p>
                <p><strong>What can go wrong:</strong> breadth becomes conglomerate dilution, or customer-funded capacity earns commodity returns.</p>
                <p><strong>Role:</strong> core &nbsp;·&nbsp; <strong>Maximum band:</strong> 3–5%</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">LITE</span> The torque</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Lumentum offers more concentrated exposure to high-speed EMLs, CW and ultra-high-power sources, plus optical circuit switching.</p>
                <p><strong>Why it belongs:</strong> current scarcity economics are visible in the numbers.</p>
                <p><strong>What must happen:</strong> new U.S. capacity ramps on time without collapsing price or mix.</p>
                <p><strong>What can go wrong:</strong> the market capitalizes peak margin as a permanent state before new supply arrives.</p>
                <p><strong>Role:</strong> high-beta scarcity exposure &nbsp;·&nbsp; <strong>Maximum band:</strong> 1–2%</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">GLW</span> The connective tissue</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Corning supplies fiber, cable and dense optical connectivity across pluggables, direct optical links and CPO.</p>
                <p><strong>Why it belongs:</strong> architecture can change while physical connections keep multiplying.</p>
                <p><strong>What must happen:</strong> the tenfold U.S. connectivity expansion tied to NVIDIA demand must earn attractive utilization and segment returns.</p>
                <p><strong>What can go wrong:</strong> a diversified manufacturer receives an AI multiple just as the build cycle normalizes.</p>
                <p><strong>Role:</strong> architecture diversifier &nbsp;·&nbsp; <strong>Maximum band:</strong> 2–4%</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">FN</span> The timing hedge</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Fabrinet benefits if pluggable optics and complex outsourced assembly persist longer than CPO narratives imply.</p>
                <p><strong>Why it belongs:</strong> transitions are mixed, and manufacturing complexity still has value.</p>
                <p><strong>What must happen:</strong> datacom programs keep scaling faster than margin compression.</p>
                <p><strong>What can go wrong:</strong> value migrates into ASIC vendors, foundries and integrated optical engines.</p>
                <p><strong>Role:</strong> hedge against a slower CPO transition&mdash;not against weaker AI demand &nbsp;·&nbsp; <strong>Maximum band:</strong> 0–2%</p>
              </div>
            </details>
          </section>

          <section className="chapter" id="viii">
            <div className="chapter-mark">Chapter VIII</div>
            <h2 className="chapter-title">The ramp is already in <em>the income statement</em></h2>

            <div className="metric-row metrics-4">
              <div className="metric">
                <div className="value">$1.81B</div>
                <div className="label">Coherent<br />Q3 FY26 revenue</div>
              </div>
              <div className="metric">
                <div className="value">$808M</div>
                <div className="label">Lumentum<br />Q3 FY26 revenue</div>
              </div>
              <div className="metric">
                <div className="value">$2.07B</div>
                <div className="label">Corning Q2 2026<br />Optical Communications</div>
              </div>
              <div className="metric">
                <div className="value">$1.21B</div>
                <div className="label">Fabrinet<br />Q3 FY26 revenue</div>
              </div>
            </div>

            <p><strong>Coherent Q3 FY26 revenue</strong> &mdash; +21% year over year; pro-forma datacenter and communications revenue grew 41%. Non-GAAP gross margin reached 39.6%. <a href="https://www.coherent.com/news/press-releases/third-quarter-fiscal-year-2026-results" target="_blank" rel="noopener noreferrer">Results</a></p>
            <p><strong>Lumentum Q3 FY26 revenue</strong> &mdash; +90% year over year, with 47.9% non-GAAP gross margin and 32.2% non-GAAP operating margin. <a href="https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Third-Quarter-of-Fiscal-Year-2026-Financial-Results/default.aspx" target="_blank" rel="noopener noreferrer">Results</a></p>
            <p><strong>Corning Q2 2026 Optical Communications sales</strong> &mdash; +32% year over year; Enterprise Networks grew 65%. <a href="https://investor.corning.com/news-and-events/news/news-details/2026/Cornings-Strong-Second-Quarter-2026-Financial-Results1-Demonstrate-Progress-on-Recently-Upgraded-Springboard-Plan/default.aspx" target="_blank" rel="noopener noreferrer">Results</a></p>
            <p><strong>Fabrinet Q3 FY26 revenue</strong> &mdash; up from $872 million a year earlier, showing that assembly and pluggables have not been erased by the CPO roadmap. <a href="https://investor.fabrinet.com/news-releases/news-release-details/fabrinet-announces-third-quarter-fiscal-year-2026-financial" target="_blank" rel="noopener noreferrer">Results</a></p>

            <p>These numbers prove demand. They do not prove the stocks are cheap.</p>

            <h3>Questions the thesis has to survive</h3>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q</span> If CPO uses fewer lasers, why own laser companies?</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>CPO can centralize light generation and reduce laser count. NVIDIA has described <a href="https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/" target="_blank" rel="noopener noreferrer">external-laser architectures</a> that use roughly four times fewer sources. But the surviving lasers require more power, tighter reliability and higher value, while total optical bandwidth grows. The bet is on <strong>value per AI system</strong>, not unit count. This must be monitored rather than assumed.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q</span> Is indium phosphide the strategic commodity?</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>InP is indispensable to many high-performance sources, but &ldquo;own the substrate&rdquo; is too simple. The defensible capability includes crystal growth, epitaxy, device fabrication, yield, packaging and qualification. Coherent&rsquo;s 2026 agreement to source six-inch substrates from <a href="https://www.sec.gov/Archives/edgar/data/1051627/000143774926022557/axti20260630_8k.htm" target="_blank" rel="noopener noreferrer">AXT&rsquo;s Beijing facility</a> also makes the geopolitical story two-sided: China can be both capacity relief and supply-chain risk.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q</span> Does CPO kill pluggables?</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>No. CPO should enter the highest-bandwidth switches and selected scale-up links first. Pluggables remain serviceable, standardized and operationally familiar. Both can grow in an expanding market; CPO needs only to take the marginal high-end socket.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q</span> Why not just own NVIDIA?</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>That may be the cleanest way to own system-level economics. The optical basket exists because qualified manufacturing can temporarily grow faster than the platform and because bottlenecks can earn scarcity returns. If those returns disappear, the component thesis should be reduced even if the technology thesis remains right.</p>
              </div>
            </details>

            <details className="expander">
              <summary>
                <span className="label"><span className="tag">Q</span> What is the most important unknown?</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">
                <p>Not whether optics grows. It is whether rising bandwidth and product value outrun falling unit counts, falling prices and the capex required to build supply.</p>
              </div>
            </details>
          </section>

          <section className="chapter" id="ix">
            <div className="chapter-mark">Chapter IX</div>
            <h2 className="chapter-title">A correct technology thesis can still be <em>a bad trade</em></h2>

            <p>The previous rule&mdash;buy five to seven percent below a recent high&mdash;was price anchoring disguised as discipline.</p>

            <p>The proper framework begins with normalized 2028–29 economics:</p>

            <ul className="tenet-list">
              <li>Estimate datacenter revenue under bear, base and bull optical-link growth.</li>
              <li>Model EML, CW/CPO and VCSEL mix rather than applying one photonics growth rate.</li>
              <li>Normalize gross margin after current scarcity pricing fades.</li>
              <li>Deduct the capex, depreciation and working capital required to create capacity.</li>
              <li>Underwrite free cash flow and incremental return on invested capital.</li>
              <li>Apply a terminal multiple appropriate to the actual business&mdash;not the AI narrative.</li>
            </ul>

            <div className="pullquote">
              Never pay a structural multiple for earnings created by a temporary shortage.
            </div>

            <div className="disc-states">
              <div className="disc-state">
                <div className="st-label">Accumulate when</div>
                <p>Orders are converting into revenue, capacity is reaching yield, free cash flow is rising after capex, and the base case clears the required return on normalized margins.</p>
              </div>
              <div className="disc-state">
                <div className="st-label">Hold when</div>
                <p>The technology evidence improves but the share price already discounts several years of flawless execution.</p>
              </div>
              <div className="disc-state">
                <div className="st-label">Reduce when</div>
                <p>Capex rises faster than credible future cash flow, customer-funded supply removes pricing power, architecture lowers value per system, or valuation itself becomes the kill condition.</p>
              </div>
            </div>

            <h3>How this breaks</h3>

            <ul className="kill-list">
              <li>
                <strong>The machine stops getting larger</strong>
                Software, workload locality or distributed architectures reduce the need for large tightly coupled accelerator domains.
              </li>
              <li>
                <strong>Copper moves the boundary faster than expected</strong>
                Active copper, retimers or a new electrical architecture preserve acceptable reach, power and density across the links expected to turn optical.
              </li>
              <li>
                <strong>Optical production disappoints</strong>
                CPO fails system-level reliability or serviceability tests, or six-inch InP and advanced packaging do not achieve planned yield.
              </li>
              <li>
                <strong>Capacity outruns demand</strong>
                Coherent, Lumentum, Sumitomo, AXT and others bring qualified capacity online faster than optical consumption grows.
              </li>
              <li>
                <strong>The product mix turns against the portfolio</strong>
                Centralized CW sources, VCSELs or another architecture reduce supplier value faster than total bandwidth grows.
              </li>
              <li>
                <strong>The buyer captures the rent</strong>
                NVIDIA and hyperscalers use multisourcing, financing and architecture control to turn scarce suppliers into low-return dedicated capacity.
              </li>
              <li>
                <strong>AI capex rolls over</strong>
                Orders and fab plans were built for a demand curve that no longer exists.
              </li>
              <li>
                <strong>The price assumes none of the above</strong>
                The most common failure is not getting the future wrong. It is paying as though the future is already certain.
              </li>
            </ul>
          </section>

          <section className="chapter" id="x">
            <div className="chapter-mark">Chapter X</div>
            <h2 className="chapter-title">Watch the boundary, the mix and <em>the cash</em></h2>

            <div className="monitor-grid">
              <div className="monitor-card">
                <h4>Architecture</h4>
                <ul>
                  <li>Rubin Ultra NVL576 deployment topology</li>
                  <li>Feynman NVL1152 copper-versus-optical boundary</li>
                  <li>Spectrum-X and Quantum-X Photonics production volumes</li>
                  <li>CPO field reliability and external-laser serviceability</li>
                </ul>
              </div>
              <div className="monitor-card">
                <h4>Product mix</h4>
                <ul>
                  <li>200G EML demand</li>
                  <li>CW and ultra-high-power laser growth</li>
                  <li>Lasers per optical engine and value per laser</li>
                  <li>Pluggable versus CPO share</li>
                  <li>VCSEL and alternative-source design wins</li>
                </ul>
              </div>
              <div className="monitor-card">
                <h4>Manufacturing</h4>
                <ul>
                  <li>Six-inch InP yield and throughput</li>
                  <li>Lumentum U.S. fab milestones</li>
                  <li>Coherent internal versus AXT substrate sourcing</li>
                  <li>Advanced-packaging yield and qualification</li>
                  <li>Corning connectivity expansion utilization</li>
                </ul>
              </div>
              <div className="monitor-card">
                <h4>Economics</h4>
                <ul>
                  <li>Price/mix contribution to gross margin</li>
                  <li>Capex and depreciation</li>
                  <li>Free-cash-flow conversion</li>
                  <li>Incremental ROIC</li>
                  <li>Customer concentration and purchase-commitment conversion</li>
                </ul>
              </div>
            </div>

            <h3>Different substrates win different primitives</h3>
            <p>Silicon is still the computational substrate. Photonics does not need to replace it.</p>
            <p>Light wins a narrower primitive: <strong>moving information across distance at high bandwidth</strong>.</p>
            <p>That is precisely why optical interconnect is investable before photonic computing. The system already needs the primitive. The conversion cost can be paid at the boundary, while mature silicon continues doing what it does best on either side.</p>
            <p>This is the filter for the next computing substrates:</p>
            <ul className="plain-list">
              <li>Does the physical system expose a primitive at radically lower cost?</li>
              <li>Is that primitive already expensive enough to matter at system level?</li>
              <li>Can it be inserted without replacing the entire stack?</li>
              <li>Does the advantage survive conversion, packaging, control and software?</li>
              <li>Can a company capture the savings before incumbent compute adapts?</li>
            </ul>
            <p>Photonic interconnect passes the first four. The portfolio is a bet on the fifth.</p>

            <h3>Honest summary</h3>
            <p>Light is becoming the structural medium for the marginal AI link. NVIDIA&rsquo;s product roadmap, procurement and capital allocation make that increasingly difficult to dispute.</p>
            <p>But inevitability at the architecture layer does not guarantee monopoly economics at the component layer.</p>
            <p>Coherent is the broad platform. Lumentum is the concentrated scarcity trade. Corning is the architecture-diversified connectivity play. Fabrinet is the hedge on a slower and messier transition.</p>
            <p>The thesis should become more confident about the physics and less romantic about the supply chain.</p>

            <div className="pullquote">
              Light wins the link. The buyer, the supplier and the shareholder still have to divide the value.
            </div>
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
              <h4>Source note</h4>
              <p>This memo relies primarily on company filings, investor materials and official NVIDIA technical disclosures current through 5 August 2026. Company forecasts and product claims are not independent verification. Position bands are portfolio limits, not automatic entry targets.</p>
            </div>
          </div>
          <div className="disclaimer">
            Prepared by CPC Consulting LLC. Internal investment research. Not financial advice. Names referenced reflect personal positioning and do not constitute solicitation. © cable.capital
          </div>
        </footer>

      </div>
    </>
  );
}
