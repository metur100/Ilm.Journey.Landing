import type { ReactNode } from 'react';

import { UI } from '../content/copy';
import { IMPRINT } from '../content/legal';
import { SITE } from '../content/site';
import { BASE, href, LANG_NAMES, langs, withLang, type Route } from '../routes';

export function Layout({ route, children }: { route: Route; children: ReactNode }) {
  const { lang } = route;
  const t = UI[lang];
  const home = href({ kind: 'home', lang });
  const navRoute = route.kind === 'notFound' ? { kind: 'home' as const, lang } : route;
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href={home}>
            <img src={`${BASE}assets/icon-192.png`} alt="" width={36} height={36} />
            <span>{t.siteName}</span>
          </a>
          <nav className="mainnav" aria-label={t.siteName}>
            <a href={`${home}#features`}>{t.nav.features}</a>
            <a href={`${home}#inside`}>{t.nav.inside}</a>
            <a href={`${home}#screenshots`}>{t.nav.screenshots}</a>
            <a href={`${home}#families`}>{t.nav.families}</a>
            <a href={`${home}#faq`}>{t.nav.faq}</a>
          </nav>
          <div className="topbar-actions">
            {route.kind !== 'notFound' ? (
              <nav className="lang" aria-label={t.language}>
                {langs.map((l) =>
                  l === lang ? (
                    <span key={l} aria-current="true" title={LANG_NAMES[l]}>
                      {l.toUpperCase()}
                    </span>
                  ) : (
                    <a key={l} href={href(withLang(navRoute, l))} hrefLang={l} lang={l} title={LANG_NAMES[l]} aria-label={LANG_NAMES[l]}>
                      {l.toUpperCase()}
                    </a>
                  ),
                )}
              </nav>
            ) : null}
            <a className="btn btn-gold btn-small topbar-cta" href={`${home}#download`}>
              {t.download}
            </a>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <a className="brand" href={home}>
              <img src={`${BASE}assets/icon-192.png`} alt="" width={36} height={36} />
              <span>{t.siteName}</span>
            </a>
            <p>{t.footerNote}</p>
            <p className="small">{t.storeNote}</p>
          </div>
          <nav aria-label={t.footerExplore}>
            <h2>{t.footerExplore}</h2>
            <ul>
              <li>
                <a href={`${home}#features`}>{t.nav.features}</a>
              </li>
              <li>
                <a href={`${home}#inside`}>{t.nav.inside}</a>
              </li>
              <li>
                <a href={`${home}#screenshots`}>{t.nav.screenshots}</a>
              </li>
              <li>
                <a href={`${home}#faq`}>{t.nav.faq}</a>
              </li>
            </ul>
          </nav>
          <nav aria-label={t.footerLegal}>
            <h2>{t.footerLegal}</h2>
            <ul>
              <li>
                <a href={href({ kind: 'privacy', lang })}>{t.privacy}</a>
              </li>
              <li>
                <a href={href({ kind: 'imprint', lang })}>{IMPRINT[lang].title}</a>
              </li>
              <li>
                <a href={href({ kind: 'support', lang })}>{t.support}</a>
              </li>
            </ul>
          </nav>
          <nav aria-label={t.footerMore}>
            <h2>{t.footerMore}</h2>
            <ul>
              <li>
                <a href={SITE.allAppsUrl}>{t.allApps}</a>
              </li>
              <li>
                <a href={SITE.repoUrl} rel="noopener">
                  {t.sourceCode}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{t.contact}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <p>
            © {SITE.updated.slice(0, 4)} {SITE.owner} · {SITE.brand}
          </p>
          <p className="small">Google Play and the Google Play logo are trademarks of Google LLC. App Store is a service mark of Apple Inc.</p>
        </div>
      </footer>
    </>
  );
}

/** Postal and email contact of the person responsible (privacy policy and imprint). */
export function Controller({ lang }: { lang: Route['lang'] }) {
  const country = { en: 'Germany', de: 'Deutschland', bs: 'Njemačka' }[lang];
  return (
    <address>
      {SITE.owner}
      <br />
      {SITE.brand}
      <br />
      {SITE.address ?? SITE.city}
      <br />
      {country}
      <br />
      {lang === 'de' ? 'E-Mail' : 'Email'}: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
    </address>
  );
}
