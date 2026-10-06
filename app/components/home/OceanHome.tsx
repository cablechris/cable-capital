import Link from "next/link";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";
import Ocean from "./Ocean";
import { archive } from "../../data/archive";
import { homeFontVars } from "./fonts";
import "./ocean-home.css";

// Read from the existing archive; dates remain in the source for RSS and chronology.
const writing = archive.map((entry, index) => ({
  n: String(index + 1).padStart(2, "0"),
  type:
    entry.type === "Memo"
      ? "Investment memo"
      : entry.type === "Thesis"
        ? "Investment thesis"
        : entry.type,
  title: entry.title,
  description: entry.deck,
  href: entry.href,
  tag: entry.status,
  date: entry.date,
  displayDate: entry.displayDate,
}));

export default function OceanHome() {
  return (
    <main id="top" className={`cable-home ${homeFontVars}`}>
      <a className="skip-link" href="#writing">
        Skip to writing
      </a>
      <section className="hero" aria-label="Chris Cable, Cable Capital">
        <Ocean />
        <div className="hero-shade" />
        <SiteHeader home />
        <div className="hero-copy">
          <h1>
            Drawn to
            <br />
            the <em>edges.</em>
          </h1>
          <p className="hero-intro">
            Big ideas, specific bets
            <br />& the occasional rabbit hole.
          </p>
          <a href="#writing" className="explore-link">
            Explore the thinking <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-bottom">
          <a className="scroll-link" href="#about">
            <span aria-hidden="true">↓</span> Beneath the surface
          </a>
          <span className="location">SYDNEY · THINKING GLOBALLY</span>
        </div>
      </section>
      <section className="about-section content-width" id="about" aria-labelledby="about-heading">
        <p className="eyebrow">01 / A LITTLE CONTEXT</p>
        <div className="about-body">
          <h2 id="about-heading">
            Endlessly curious.
            <br />
            <em>Strong opinions, loosely held.</em>
          </h2>
          <div className="about-copy">
            <p>I’m Chris Cable, an independent investor based in Sydney. I look for technological shifts before they become obvious. My interests are broad, but I tend to be drawn to products, platforms and ideas at the intersection of AI, crypto and frontier science.</p>
            <Link className="text-link" href="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="writing-section content-width"
        id="writing"
        aria-labelledby="writing-heading"
      >
        <div className="section-top">
          <p className="eyebrow">02 / THE RECORD</p>
          <span className="section-note">Ideas, followed further.</span>
        </div>
        <div className="section-heading">
          <h2 id="writing-heading">
            Selected <em>thinking.</em>
          </h2>
          <Link className="text-link" href="/thesis">
            All theses & memos <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="writing-list">
          {writing.map((w) => (
            <Link prefetch={false} className="writing-row" href={w.href} key={w.n}>
              <span className="row-number">{w.n}</span>
              <div className="row-content">
                <p className="row-type">{w.type}</p>
                <h3>{w.title}</h3>
                <p className="row-description">{w.description}</p>
              </div>
              <span className="row-meta">
                <time dateTime={w.date}>{w.displayDate}</time>
                {w.tag && <span className="row-tag">{w.tag}</span>}
              </span>
              <span className="row-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
        <Link className="research-link text-link" href="/research">
          Other research & writing <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
