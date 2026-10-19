import type { IconName } from '../components/Icons';

export const LANGS = ['en', 'de', 'bs'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  de: 'Deutsch',
  bs: 'Bosanski',
};

export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US',
  de: 'de_DE',
  bs: 'bs_BA',
};

export const SITE = {
  baseUrl: 'https://metur100.github.io/Ilm.Journey.Landing/',
  owner: 'Medin Turkes',
  brand: 'Certi Development',
  email: 'certidevelopment@gmail.com',
  // Street and postcode for the Imprint, e.g. 'Musterstraße 1, 40210 Düsseldorf'. Until it is set, only the city is shown.
  address: null as string | null,
  city: 'Düsseldorf',
  updated: '2026-10-19',
  appName: 'Ilm Journey',
  packageId: 'com.certidevelopment.ilmjourney',
  repoUrl: 'https://github.com/metur100/Ilm.Journey',
  allAppsUrl: 'https://metur100.github.io/Islam.Apps.Landing/',
  // Set play: true once the app is live on Google Play, and appStoreId (the number from
  // https://apps.apple.com/app/id<number>) once it is live on the App Store. Until then the badge shows "Coming soon".
  stores: { play: false, appStoreId: null as number | null },
  // Google Play has no Bosnian store language; Croatian is the closest one.
  playLocale: { en: 'en', de: 'de', bs: 'hr' } as Record<Lang, string>,
};

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface Tab {
  icon: IconName;
  title: string;
  text: string;
}

export interface GameCategory {
  title: string;
  count: number;
  text: string;
}

export interface Principle {
  icon: IconName;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Copy {
  metaTitle: string;
  metaDescription: string;
  siteName: string;
  skip: string;
  nav: { features: string; inside: string; screenshots: string; families: string; faq: string };
  download: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  heroCta: string;
  heroCta2: string;
  trust: string[];
  stats: Stat[];
  featuresKicker: string;
  featuresTitle: string;
  featuresText: string;
  features: Feature[];
  insideKicker: string;
  insideTitle: string;
  insideText: string;
  tabs: Tab[];
  gamesKicker: string;
  gamesTitle: string;
  gamesText: string;
  categories: GameCategory[];
  screensKicker: string;
  screensTitle: string;
  screensText: string;
  captures: string[];
  principlesKicker: string;
  principlesTitle: string;
  principles: Principle[];
  parentsKicker: string;
  parentsTitle: string;
  parentsText: string;
  shareTitle: string;
  shareText: string;
  copyLink: string;
  copied: string;
  faqKicker: string;
  faqTitle: string;
  faq: Faq[];
  downloadKicker: string;
  downloadTitle: string;
  downloadText: string;
  downloadNote: string;
  soon: string;
  storeNote: string;
  footerNote: string;
  footerExplore: string;
  footerLegal: string;
  footerMore: string;
  privacy: string;
  imprint: string;
  support: string;
  contact: string;
  sourceCode: string;
  allApps: string;
  language: string;
  backHome: string;
  notFound: string;
  notFoundText: string;
  supportLead: string;
  supportEmailTitle: string;
  supportResponse: string;
  supportFaqTitle: string;
  supportFaqText: string;
  supportAppTitle: string;
  supportVersion: string;
  supportPrivacy: string;
}
