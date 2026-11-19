import { NAV_TABS, type TabId } from '../data/navigation';
import {
  DiscordIcon,
  InstagramIcon,
  TikTokIcon,
  TwitchIcon,
  YouTubeIcon,
} from './Icons';

interface FooterProps {
  onSelectTab: (tab: TabId) => void;
}

export function Footer({ onSelectTab }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-name">oneVRNT · VARIANT COMMUNITY</div>
          <div className="mono-tag" style={{ marginTop: 4 }}>
            EST. 2023 · PH · CONTENT CREATORS . GAMERS
          </div>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className="footer-link"
              onClick={() => onSelectTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://twitch.tv"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="Twitch"
          >
            <TwitchIcon />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
