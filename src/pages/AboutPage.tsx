import officialLogo from '../assets/official_logo.jpg';
import type { TabId } from '../data/navigation';
import { ArrowUpRightIcon } from '../components/Icons';
import { COLLECTIVE_STATS } from '../data/content';

interface AboutPageProps {
  onNavigate: (tab: TabId) => void;
}

const PILLARS = [
  {
    code: '01',
    title: 'Entertainment First',
    body: 'Inspired by the group chemistry of OfflineTV and the high-stakes challenges of Sidemen, every upload is built around genuine friendship and replayable moments.',
  },
  {
    code: '02',
    title: 'Built Together',
    body: 'From Manila IRL shoots to late-night custom lobbies, our creators back each other up on camera and behind the edit—growing as one unit.',
  },
  {
    code: '03',
    title: 'Unapologetically Variant',
    body: 'No single genre boxes us in. Tac-shooters, party games, podcasts, and street challenges all live under the same monochrome crest.',
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="page-enter">
      <section className="section section-bordered">
        <div className="container hero-grid">
          <div>
            <span className="section-label">
              <span className="section-label-dot" />
              ABOUT US · EST. 2023
            </span>
            <h1 className="display-title hero-title">
              THE STORY BEHIND
              <br />
              oneVRNT.
            </h1>
            <p className="hero-desc">
              Founded in 2023 in the Philippines, <strong>oneVRNT</strong>—also
              known as <strong>VARIANT Community</strong>—started as a tight-knit
              Discord server of gamers, editors, and streamers who wanted to build
              something bigger than solo channels.
            </p>
            <p className="hero-desc" style={{ marginBottom: 28 }}>
              Drawing inspiration from iconic creator houses like OfflineTV and
              Sidemen, we combine competitive gaming roots with high-energy group
              variety content made for a global audience.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNavigate('talent')}
              >
                Explore Talent
                <ArrowUpRightIcon />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onNavigate('contact')}
              >
                Partner With Us
              </button>
            </div>
          </div>

          <div className="hero-logo-stage">
            <img
              src={officialLogo}
              alt="oneVRNT Official Logo"
              className="hero-logo-img"
            />
          </div>
        </div>
      </section>

      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="mono-tag">OUR DNA</span>
              <h2 className="display-title section-title">Core Pillars</h2>
            </div>
          </div>

          <div className="grid-3">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.code}
                className="card"
                style={{ padding: 26 }}
              >
                <span className="mono-tag">{pillar.code}</span>
                <h3
                  className="display-title"
                  style={{ fontSize: '1.3rem', marginTop: 12, marginBottom: 10 }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="mono-tag">BY THE NUMBERS</span>
              <h2 className="display-title section-title">Collective Snapshot</h2>
            </div>
          </div>

          <div className="grid-4">
            {COLLECTIVE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="card"
                style={{ padding: 28, textAlign: 'left' }}
              >
                <div
                  className="display-title"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
                >
                  {stat.value}
                </div>
                <div className="mono-tag" style={{ marginTop: 8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
