export interface FeaturedVideo {
  id: string;
  episode: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  url: string;
}

export interface CollectiveStat {
  label: string;
  value: string;
}

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'sunday-01',
    episode: 'EP. 014',
    title: 'oneVRNT ₱10,000 vs ₱100 Manila Food Hunt',
    category: 'IRL Challenge',
    duration: '28:42',
    description:
      'Two squads split across Metro Manila with wildly different budgets. Who eats better before midnight?',
    url: 'https://youtube.com',
  },
  {
    id: 'gauntlet-02',
    episode: 'EP. 013',
    title: 'Last to Leave the Custom Lobby Wins Everything',
    category: 'Gaming',
    duration: '22:15',
    description:
      'Seven creators, one shrinking map, and escalating forfeits every round until one player stands.',
    url: 'https://youtube.com',
  },
  {
    id: 'podcast-03',
    episode: 'EP. 012',
    title: 'VARIANT Table: Building a Creator House from Scratch',
    category: 'Podcast',
    duration: '46:10',
    description:
      'Unfiltered stories from our 2023 beginnings, burnout lessons, and what comes next for the PH scene.',
    url: 'https://youtube.com',
  },
  {
    id: 'blind-04',
    episode: 'EP. 011',
    title: '7 Creators vs 1 Imposter in Real Life',
    category: 'Variety',
    duration: '19:54',
    description:
      'Hidden roles, terrible alibis, and instant betrayal as the squad tries to expose the saboteur.',
    url: 'https://youtube.com',
  },
];

export const COLLECTIVE_STATS: CollectiveStat[] = [
  { label: 'Established', value: '2023' },
  { label: 'Home Base', value: 'PH' },
  { label: 'Active Roster', value: '07' },
  { label: 'Format', value: 'Weekly' },
];
