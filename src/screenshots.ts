import { UI } from './content/copy';
import type { Lang } from './content/site';

// Phone screenshots shown on the landing page: src/assets/screenshots/<lang>/<nn-name>.jpg
const FILES = import.meta.glob('./assets/screenshots/*/*.{jpg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<
  string,
  string
>;

export interface Shot {
  src: string;
  caption: string;
}

export function screenshots(lang: Lang): Shot[] {
  const keysFor = (l: Lang) =>
    Object.keys(FILES)
      .filter((k) => k.startsWith(`./assets/screenshots/${l}/`))
      .sort();
  const keys = keysFor(lang).length ? keysFor(lang) : keysFor('en');
  return keys.map((k, i) => ({ src: FILES[k], caption: UI[lang].captures[i] ?? '' }));
}
