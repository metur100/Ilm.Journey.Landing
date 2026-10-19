import { UI } from './content/copy';
import { IMPRINT, PRIVACY } from './content/legal';
import { LANGS, OG_LOCALE, SITE, type Lang } from './content/site';

export type Route =
  | { kind: 'home'; lang: Lang }
  | { kind: 'privacy'; lang: Lang }
  | { kind: 'imprint'; lang: Lang }
  | { kind: 'support'; lang: Lang }
  | { kind: 'notFound'; lang: Lang };

export { LANG_NAMES } from './content/site';

export const BASE = import.meta.env.BASE_URL; // '/Ilm.Journey.Landing/'
export const langs = LANGS as readonly Lang[];

/** Path of a route relative to the site root, always ending in '/'. */
export function routePath(route: Route): string {
  switch (route.kind) {
    case 'home':
      return `${route.lang}/`;
    case 'privacy':
      return `${route.lang}/privacy/`;
    case 'imprint':
      return `${route.lang}/imprint/`;
    case 'support':
      return `${route.lang}/support/`;
    case 'notFound':
      return '404.html';
  }
}

export const href = (route: Route) => BASE + routePath(route);
export const withLang = (route: Route, lang: Lang): Route => ({ ...route, lang }) as Route;

/** Matches a path relative to the site root (e.g. "de/privacy/"). */
export function matchRoute(path: string): Route {
  const parts = path.split('/').filter(Boolean);
  if (!parts.length) return { kind: 'home', lang: 'en' };
  const lang = parts[0] as Lang;
  if (!langs.includes(lang)) return { kind: 'notFound', lang: 'en' };
  if (parts.length === 1) return { kind: 'home', lang };
  if (parts.length === 2) {
    if (parts[1] === 'privacy') return { kind: 'privacy', lang };
    if (parts[1] === 'imprint') return { kind: 'imprint', lang };
    if (parts[1] === 'support') return { kind: 'support', lang };
  }
  return { kind: 'notFound', lang };
}

export function allRoutes(): Route[] {
  const routes: Route[] = [];
  for (const lang of langs) {
    routes.push(
      { kind: 'home', lang },
      { kind: 'privacy', lang },
      { kind: 'imprint', lang },
      { kind: 'support', lang },
    );
  }
  return routes;
}

export interface Head {
  title: string;
  description: string;
  ogImage: string;
  jsonLd?: object;
}

export function headFor(route: Route): Head {
  const t = UI[route.lang];
  const og = 'assets/og-image.png';
  switch (route.kind) {
    case 'home':
      return {
        title: t.metaTitle,
        description: t.metaDescription,
        ogImage: og,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: t.siteName,
          description: t.metaDescription,
          operatingSystem: 'Android, iOS',
          applicationCategory: 'EducationalApplication',
          inLanguage: langs,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
          image: `${SITE.baseUrl}assets/icon-512.png`,
          url: SITE.baseUrl + routePath(route),
          author: { '@type': 'Person', name: SITE.owner },
        },
      };
    case 'privacy':
      return {
        title: `${PRIVACY[route.lang].title} – ${t.siteName}`,
        description: PRIVACY[route.lang].summary,
        ogImage: og,
      };
    case 'imprint':
      return {
        title: `${IMPRINT[route.lang].title} – ${t.siteName}`,
        description: t.footerNote,
        ogImage: og,
      };
    case 'support':
      return {
        title: `${t.support} – ${t.siteName}`,
        description: t.supportLead,
        ogImage: og,
      };
    case 'notFound':
      return { title: `${t.notFound} – ${t.siteName}`, description: t.notFoundText, ogImage: og };
  }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The <head> tags of a page as an HTML string (used when prerendering). */
export function headHtml(route: Route): string {
  const h = headFor(route);
  const tags = [`<title>${esc(h.title)}</title>`, `<meta name="description" content="${esc(h.description)}">`];
  if (route.kind === 'notFound') {
    tags.push('<meta name="robots" content="noindex">');
  } else {
    const url = SITE.baseUrl + routePath(route);
    tags.push(`<link rel="canonical" href="${url}">`);
    for (const l of langs) {
      tags.push(`<link rel="alternate" hreflang="${l}" href="${SITE.baseUrl}${routePath(withLang(route, l))}">`);
    }
    tags.push(`<link rel="alternate" hreflang="x-default" href="${SITE.baseUrl}${routePath(withLang(route, 'en'))}">`);
    tags.push(
      '<meta property="og:type" content="website">',
      `<meta property="og:title" content="${esc(h.title)}">`,
      `<meta property="og:description" content="${esc(h.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${SITE.baseUrl}${h.ogImage}">`,
      `<meta property="og:locale" content="${OG_LOCALE[route.lang]}">`,
      '<meta name="twitter:card" content="summary_large_image">',
      `<meta name="twitter:image" content="${SITE.baseUrl}${h.ogImage}">`,
    );
  }
  if (h.jsonLd) tags.push(`<script type="application/ld+json">${JSON.stringify(h.jsonLd).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n    ');
}
