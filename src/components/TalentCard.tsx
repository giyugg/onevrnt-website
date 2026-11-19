import type { ReactNode } from 'react';
import type { TalentMember, TalentSocials } from '../data/talent';
import {
  InstagramIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YouTubeIcon,
} from './Icons';

const SOCIAL_CONFIG: {
  key: keyof TalentSocials;
  label: string;
  icon: ReactNode;
}[] = [
  { key: 'youtube', label: 'YouTube', icon: <YouTubeIcon /> },
  { key: 'twitch', label: 'Twitch', icon: <TwitchIcon /> },
  { key: 'tiktok', label: 'TikTok', icon: <TikTokIcon /> },
  { key: 'instagram', label: 'Instagram', icon: <InstagramIcon /> },
  { key: 'twitter', label: 'X / Twitter', icon: <TwitterIcon /> },
];

interface TalentCardProps {
  member: TalentMember;
  compact?: boolean;
}

export function TalentCard({ member, compact = false }: TalentCardProps) {
  return (
    <article className="card talent-card">
      <div className="talent-top">
        <div className="talent-avatar" aria-hidden="true">
          {member.monogram}
        </div>
        <div>
          <h3 className="talent-name">{member.name}</h3>
          <div className="talent-handle">{member.handle}</div>
        </div>
      </div>

      <div className="talent-roles">
        {member.roles.map((role) => (
          <span key={role} className="role-chip">
            {role}
          </span>
        ))}
      </div>

      <p className="talent-bio">{compact ? member.tagline : member.bio}</p>

      <div className="talent-socials">
        {SOCIAL_CONFIG.map(({ key, label, icon }) => {
          const url = member.socials[key];
          if (!url) return null;
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label={`${member.name} on ${label}`}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </article>
  );
}
