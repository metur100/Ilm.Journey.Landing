import { Controller } from '../components/Layout';
import { Icon } from '../components/Icons';
import { UI } from '../content/copy';
import { IMPRINT, PRIVACY } from '../content/legal';
import { SITE, type Lang } from '../content/site';
import { href } from '../routes';

export function Privacy({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const d = PRIVACY[lang];
  return (
    <section className="section">
      <div className="wrap narrow prose legal">
        <p className="crumbs">
          <a href={href({ kind: 'home', lang })}>{t.siteName}</a>
        </p>
        <h1>{d.title}</h1>
        <p className="muted">
          {d.updated}: {SITE.updated}
        </p>
        <p>{d.intro}</p>
        <h2>{d.summaryTitle}</h2>
        <p>{d.summary}</p>
        <h2>{d.storedTitle}</h2>
        <p>{d.stored}</p>
        <h2>{d.internetTitle}</h2>
        <p>{d.internet}</p>
        <h2>{d.notificationsTitle}</h2>
        <p>{d.notifications}</p>
        <h2>{d.permissionsTitle}</h2>
        <p>{d.permissions}</p>
        <h2>{d.childrenTitle}</h2>
        <p>{d.children}</p>
        <h2>{d.storesTitle}</h2>
        <p>{d.stores}</p>
        <h2>{d.websiteTitle}</h2>
        {d.website.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2>{d.changesTitle}</h2>
        <p>{d.changes}</p>
        <h2>{d.contactTitle}</h2>
        <p>{d.contact}</p>
        <Controller lang={lang} />
      </div>
    </section>
  );
}

export function Imprint({ lang }: { lang: Lang }) {
  const d = IMPRINT[lang];
  return (
    <section className="section">
      <div className="wrap narrow prose legal">
        <h1>{d.title}</h1>
        <h2>{d.provider}</h2>
        <Controller lang={lang} />
        <h2>{d.contact}</h2>
        <p>
          {lang === 'de' ? 'E-Mail' : 'Email'}: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <h2>{d.responsible}</h2>
        <p>
          {SITE.owner}, {SITE.address ?? SITE.city}
        </p>
        <h2>{d.disclaimerTitle}</h2>
        <p>{d.disclaimer}</p>
        <h2>{d.disputeTitle}</h2>
        <p>{d.dispute}</p>
      </div>
    </section>
  );
}

export function Support({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const home = href({ kind: 'home', lang });
  return (
    <section className="section">
      <div className="wrap narrow prose legal">
        <p className="crumbs">
          <a href={home}>{t.siteName}</a>
        </p>
        <h1>{t.support}</h1>
        <p className="body-lg">{t.supportLead}</p>
        <div className="support-card">
          <span className="card-icon">
            <Icon name="mail" size={24} />
          </span>
          <h2>{t.supportEmailTitle}</h2>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className="small">{t.supportResponse}</p>
        </div>
        <h2>{t.supportFaqTitle}</h2>
        <p>
          {t.supportFaqText} <a href={`${home}#faq`}>{t.nav.faq}</a>
        </p>
        <h2>{t.supportAppTitle}</h2>
        <p>
          {t.siteName} · {t.supportVersion}
        </p>
        <p>
          <a href={href({ kind: 'privacy', lang })}>{t.supportPrivacy}</a>
        </p>
        <p>
          <a className="link-arrow" href={home}>
            {t.backHome}
            <Icon name="arrow" size={16} />
          </a>
        </p>
      </div>
    </section>
  );
}
