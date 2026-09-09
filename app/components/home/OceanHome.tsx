import Link from "next/link";
import SiteFooter from "../site/SiteFooter";
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
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Cable Capital home">
            <span>Cable Capital</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#writing">Writing</a>
            <a href="#about">About</a>
            <a className="contact-link" href="mailto:info@cable.capital">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>
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
          <a className="scroll-link" href="#writing">
            <span aria-hidden="true">↓</span> Beneath the surface
          </a>
          <span className="location">SYDNEY · THINKING GLOBALLY</span>
        </div>
      </section>
      <section
        className="writing-section content-width"
        id="writing"
        aria-labelledby="writing-heading"
      >
        <div className="section-top">
          <p className="eyebrow">01 / THE RECORD</p>
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
              <span className="row-tag">{w.tag}</span>
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
      <section className="about-section content-width" id="about" aria-labelledby="about-heading">
        <p className="eyebrow">02 / A LITTLE CONTEXT</p>
        <div className="about-body">
          <h2 id="about-heading">
            Curiosity first.
            <br />
            <em>Conviction earned.</em>
          </h2>
          <div className="about-copy">
            <p>I’m Chris Cable, an investor, operator and father based in Sydney, exploring AI, crypto and frontier science.</p>
            <p>My path has taken me from equity research to leading insights and analytics at Diageo in New York. Today, I manage a private portfolio, follow questions, test ideas and write up my thinking.</p>
            <p>The barbell philosophy shapes how I think about life as well as investing. Away from the desk, that means kettlebells in front of the kids and making more time to take them fishing on the water.</p>
            <p className="about-aside">Building, investing or researching something interesting? I’d enjoy comparing notes.</p>
            <Link className="text-link" href="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
