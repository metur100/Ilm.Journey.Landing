import { Icon } from '../components/Icons';
import { Phone } from '../components/Phone';
import { ShareButton } from '../components/ShareButton';
import { StoreBadges } from '../components/StoreBadges';
import { UI } from '../content/copy';
import { SITE, type Lang } from '../content/site';
import { BASE, href } from '../routes';
import { screenshots } from '../screenshots';

export function Home({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const shots = screenshots(lang);
  const icon = `${BASE}assets/icon-192.png`;
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroKicker}</p>
            <h1>
              {t.heroTitle} <span className="title-accent">{t.heroTitleAccent}</span>
            </h1>
            <p className="lead">{t.heroLead}</p>
            <div className="actions">
              <a className="btn btn-gold" href="#download">
                {t.heroCta}
                <Icon name="download" size={18} />
              </a>
              <a className="btn btn-ghost" href="#features">
                {t.heroCta2}
              </a>
            </div>
            <ul className="trust">
              {t.trust.map((x) => (
                <li key={x}>
                  <Icon name="check" size={16} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <Phone src={shots[1]?.src} alt="" className="phone-left" eager placeholder={icon} />
            <Phone src={shots[0]?.src} alt="" className="phone-center" eager placeholder={icon} />
            <Phone src={shots[2]?.src} alt="" className="phone-right" eager placeholder={icon} />
            <div className="hero-float">
              <span className="hero-float-icon">
                <Icon name="star" size={18} />
              </span>
              <span>
                <strong>{t.stats[0].value}</strong> {t.stats[0].label}
              </span>
            </div>
          </div>
        </div>
        <div className="wrap">
          <ul className="stats">
            {t.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="features" className="section">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-dark">{t.featuresKicker}</p>
            <h2>{t.featuresTitle}</h2>
            <p>{t.featuresText}</p>
          </header>
          <ul className="feature-grid">
            {t.features.map((f) => (
              <li className="feature-card" key={f.title}>
                <span className="feature-icon">
                  <Icon name={f.icon} size={26} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="inside" className="section section-tint">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-dark">{t.insideKicker}</p>
            <h2>{t.insideTitle}</h2>
            <p>{t.insideText}</p>
          </header>
          <ul className="inside-grid">
            {t.tabs.map((tab, i) => (
              <li className="inside-card" key={tab.title}>
                <span className="inside-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="card-icon">
                  <Icon name={tab.icon} size={24} />
                </span>
                <h3>{tab.title}</h3>
                <p>{tab.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="games" className="section">
        <div className="wrap games-layout">
          <div className="games-intro">
            <p className="eyebrow eyebrow-dark">{t.gamesKicker}</p>
            <h2>{t.gamesTitle}</h2>
            <p>{t.gamesText}</p>
            <a className="link-arrow" href="#screenshots">
              {t.nav.screenshots}
              <Icon name="arrow" size={18} />
            </a>
          </div>
          <ul className="game-grid">
            {t.categories.map((c) => (
              <li className="game-card" key={c.title}>
                <span className="game-count">{c.count}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="screenshots" className="section section-tint">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-dark">{t.screensKicker}</p>
            <h2>{t.screensTitle}</h2>
            <p>{t.screensText}</p>
          </header>
          <div className="gallery" tabIndex={0} role="region" aria-label={t.nav.screenshots}>
            {shots.map((s, i) => (
              <figure className="shot" key={s.src}>
                <Phone src={s.src} alt={`${t.siteName}: ${s.caption}`} />
                <figcaption>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="section">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-dark">{t.principlesKicker}</p>
            <h2>{t.principlesTitle}</h2>
          </header>
          <ul className="principles-grid">
            {t.principles.map((p) => (
              <li className="principle" key={p.title}>
                <span className="card-icon">
                  <Icon name={p.icon} size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="families" className="section section-tint">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow-dark">{t.parentsKicker}</p>
            <h2>{t.parentsTitle}</h2>
            <p className="body-lg">{t.parentsText}</p>
          </div>
          <aside className="share-card">
            <span className="card-icon">
              <Icon name="share" size={24} />
            </span>
            <h3>{t.shareTitle}</h3>
            <p>{t.shareText}</p>
            <ShareButton url={`${SITE.baseUrl}${lang}/`} label={t.copyLink} doneLabel={t.copied} />
          </aside>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="wrap faq-grid">
          <header className="section-head section-head-left">
            <p className="eyebrow eyebrow-dark">{t.faqKicker}</p>
            <h2>{t.faqTitle}</h2>
            <p>
              <a className="link-arrow" href={href({ kind: 'support', lang })}>
                {t.support}
                <Icon name="arrow" size={16} />
              </a>
            </p>
          </header>
          <div className="faq">
            {t.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="section">
        <div className="wrap">
          <div className="download-band">
            <div className="download-copy">
              <p className="eyebrow">{t.downloadKicker}</p>
              <h2>{t.downloadTitle}</h2>
              <p>{t.downloadText}</p>
              <StoreBadges lang={lang} />
              <p className="download-note">{t.downloadNote}</p>
            </div>
            <img
              className="download-art"
              src={`${BASE}assets/feature-${lang}.png`}
              alt=""
              width={1024}
              height={500}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
