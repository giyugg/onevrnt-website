export type TalentRole =
  'IRL'
  | 'Streamer'
  | 'Producer'
  | 'Variety'
  | 'Competitive'
  | 'FPS';


export type LevelRole = 'LVL 5' | 'LVL 4' | 'LVL 3' | 'LVL 2' | 'LVL 1';
export type OwnershipRole = 'Owner' | 'Co-Owner';

export interface TalentSocials {
  youtube?: string;
  twitch?: string;
  tiktok?: string;
  instagram?: string;
  twitter?: string;
}

export interface TalentMember {
  id: string;
  name: string;
  handle: string;
  monogram: string;
  talentRole?: TalentRole[];
  levelRole?: LevelRole[];
  ownershipRole?: OwnershipRole[];
  roles: (TalentRole | LevelRole | OwnershipRole)[];
  tagline: string;
  bio: string;
  featured: boolean;
  socials: TalentSocials;
}

export const TALENT_ROLES: ('All' | TalentRole)[] = [
  'All',
  'Variety',
  'FPS',
  'IRL',
  'Streamer',
  'Producer',
  'Competitive',
];

export const TALENT_ROSTER: TalentMember[] = [
  {
    id: 'GiyuGG',
    name: 'GiyuGG',
    handle: '@giyugg',
    monogram: 'GG',
    roles: ['LVL 5', 'Owner', 'IRL', 'Streamer'],
    tagline: 'Who started everything. Known as "kalbo" in the community. He always sleeps in discord call.',
    bio: 'Who started the whole oneVRNT Organization. He started oneVRNT as Fnatic.PH and its earlier focus is on MLBB Professional Gaming. After MLBB, he started to focus on osu! tournaments while being new at osu! and he met the first volunteer, and now a co-owner, Doublemint. He is the main host of the osu! tournaments and he is also a streamer.',
    featured: true,
    socials: {
      youtube: 'https://www.youtube.com/@giyugg_vrnt',
      twitch: 'https://twitch.tv/giyugg_',
      tiktok: 'https://www.tiktok.com/@giyugg.osu',
      twitter: 'https://x.com/GiyuGG_',
    },
  },
  {
    id: 'Doublemint',
    name: 'Doublemint',
    handle: '@doublemint',
    monogram: 'DM',
    roles: ['LVL 4', 'Co-Owner', 'Streamer'],
    tagline: 'The only guy who lives in Japan. Serves as the co-owner of oneVRNT and the main host of the osu! tournaments.',
    bio: 'From Japan, he\'s the one who volunteered to help GiyuGG in the early days of oneVRNT. He is the co-owner of oneVRNT and he is also a streamer. He is the main host of the osu! tournaments and he is also a streamer.',
    featured: true,
    socials: {
      twitch: 'https://twitch.tv',
      youtube: 'https://youtube.com',
      twitter: 'https://x.com',
    },
  },
  {
    id: 'Taihou',
    name: 'Taihou',
    handle: '@taihou',
    monogram: 'TH',
    roles: ['LVL 4', 'Co-Owner', 'IRL' ,'Streamer'],
    tagline: 'Who drops the magic word. The chaotic energy of the group, and also a gentlemen. ',
    bio: 'Bridges on-camera chaos and post-production polish—storyboarding group vlogs, podcasts, and Manila street challenges.',
    featured: true,
    socials: {
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com',
    },
  },
  {
    id: 'Naechi',
    name: 'HaruNaechi',
    handle: '@naechi',
    monogram: 'MK',
    roles: ['LVL 4', 'Co-Owner', 'IRL'],
    tagline: 'Just shows once in a bluemoon.',
    bio: 'Brings the energy to party games, karaoke streams, and community Discord events where every viewer feels part of the house.',
    featured: true,
    socials: {
      twitch: 'https://twitch.tv',
      tiktok: 'https://tiktok.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'kanam',
    name: 'kanam',
    handle: '@kanam',
    monogram: 'KN',
    roles: ['LVL 4', 'Variety', 'Producer'],
    tagline: 'Core member of oneVRNT.',
    bio: 'Part of the core oneVRNT crew—always down for group games, late-night calls, and community streams.',
    featured: true,
    socials: {
      youtube: 'https://youtube.com',
      twitch: 'https://twitch.tv',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'Arc',
    name: 'Arc',
    handle: '@arc',
    monogram: 'AR',
    roles: ['LVL 4', 'FPS', 'Variety'],
    tagline: 'The quiet one, but deadly in games.',
    bio: 'A silent but deadly presence in competitive matches, Kuro excels in strategy and precision, often leading the team to victory with his calm demeanor.',
    featured: false,
    socials: {
      twitch: 'https://twitch.tv',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
    },
  },
];
