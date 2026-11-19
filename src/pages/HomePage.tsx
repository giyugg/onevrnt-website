import officialLogo from '../assets/official_logo.jpg';
import type { TabId } from '../data/navigation';
import { TalentCard } from '../components/TalentCard';
import { ArrowUpRightIcon, DiscordIcon, YouTubeIcon } from '../components/Icons';
import { COLLECTIVE_STATS, FEATURED_VIDEOS } from '../data/content';
import { TALENT_ROSTER } from '../data/talent';

interface HomePageProps {
  onNavigate: (tab: TabId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const spotlightMembers = TALENT_ROSTER.filter((m) => m.featured);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="display-title hero-title">
              CONTENT CREATORS.
              <br />
              GAMERS.
              <br />
              SINCE 2023.
            </h1>

            <p className="hero-desc">
              <strong>oneVRNT</strong> (VARIANT Community) is a Filipino-based
              creator collective. Started as an osu! tournament host, we've grown
               into a full-fledged content creator group with a roster of streamers, 
               for-fun game players, and soon to be IRL content creators.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNavigate('talent')}
              >
                Meet the Talent
                <ArrowUpRightIcon />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onNavigate('about')}
              >
                Our Story
              </button>
            </div>

            <div className="hero-meta-strip">
              {COLLECTIVE_STATS.map((stat) => (
                <div key={stat.label} className="hero-meta-item">
                  <span className="hero-meta-val">{stat.value}</span>
                  <span className="mono-tag">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-logo-stage">
            <img
              src={officialLogo}
              alt="oneVRNT Official Crest"
              className="hero-logo-img"
            />
          </div>
        </div>
      </section>

      {/* Latest Videos / Featured Series */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="mono-tag">LATEST DROPS</span>
              <h2 className="display-title section-title">Featured Series</h2>
              <p className="section-subtitle">
                Weekly group challenges, custom lobbies, and late-night podcasts
                from the VARIANT house.
              </p>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <YouTubeIcon />
              Watch on YouTube
            </a>
          </div>

          <div className="grid-2">
            {FEATURED_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="card video-card"
              >
                <div className="video-thumb">
                  <span className="video-ep">{video.episode}</span>
                  <span className="video-thumb-mark">{video.category}</span>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-body">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                    }}
                  >
                    <span className="mono-tag">{video.category}</span>
                    <ArrowUpRightIcon />
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-desc">{video.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Spotlight */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="mono-tag">THE ROSTER</span>
              <h2 className="display-title section-title">Core People</h2>
              <p className="section-subtitle">
                The core people driving the oneVRNT lineup.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('talent')}
            >
              View Full Roster
              <ArrowUpRightIcon />
            </button>
          </div>

          <div className="grid-5">
            {spotlightMembers.map((member) => (
              <TalentCard key={member.id} member={member} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Community & Socials Banner */}
      <section className="section">
        <div className="container">
          <div className="community-banner">
            <div>
              <span className="mono-tag">VARIANT COMMUNITY</span>
              <h2
                className="display-title"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginTop: 6 }}
              >
                Join the Discord &amp; Catch Every Drop
              </h2>
              <p className="community-banner-desc">
                Hang out with the crew, join community game nights, and get early
                updates on upcoming shoots, collabs, and merch drops.
              </p>
            </div>

            <div className="banner-actions">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-inverted"
              >
                <DiscordIcon />
                Join Discord
              </a>
              <button
                type="button"
                className="btn btn-inverted-outline"
                onClick={() => onNavigate('contact')}
              >
                Work With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
