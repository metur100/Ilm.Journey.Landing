import appStore from '../assets/badges/app-store.svg';
import playBs from '../assets/badges/google-play-bs.png';
import playDe from '../assets/badges/google-play-de.png';
import playEn from '../assets/badges/google-play-en.png';
import { SITE, type Lang } from '../content/site';
import { UI } from '../content/copy';

const PLAY_BADGE: Record<Lang, string> = { en: playEn, de: playDe, bs: playBs };

/**
 * Official Google Play and App Store badges. A badge links to the store only once the app is live
 * (SITE.stores); until then it is shown unchanged, not clickable, with a "Coming soon" note.
 */
export function StoreBadges({ lang, compact }: { lang: Lang; compact?: boolean }) {
  const t = UI[lang];
  const badges = [
    {
      key: 'play',
      img: PLAY_BADGE[lang],
      alt: 'Google Play',
      href: SITE.stores.play
        ? `https://play.google.com/store/apps/details?id=${SITE.packageId}&hl=${SITE.playLocale[lang]}`
        : null,
    },
    {
      key: 'ios',
      img: appStore,
      alt: 'App Store',
      href: SITE.stores.appStoreId ? `https://apps.apple.com/app/id${SITE.stores.appStoreId}` : null,
    },
  ];
  return (
    <ul className={`badges${compact ? ' badges-compact' : ''}`}>
      {badges.map((b) => (
        <li key={b.key}>
          {b.href ? (
            <a href={b.href} rel="noopener" className="badge-link">
              <img src={b.img} alt={b.alt} height={48} />
            </a>
          ) : (
            <span className="badge-soon" aria-label={`${b.alt} – ${t.soon}`}>
              <img src={b.img} alt="" height={48} />
              <small>{t.soon}</small>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
