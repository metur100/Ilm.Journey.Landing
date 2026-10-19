import { Icon } from './components/Icons';
import { Layout } from './components/Layout';
import { UI } from './content/copy';
import type { Lang } from './content/site';
import { Home } from './pages/Home';
import { Imprint, Privacy, Support } from './pages/Legal';
import { href, type Route } from './routes';

function NotFound({ lang }: { lang: Lang }) {
  const t = UI[lang];
  return (
    <section className="section">
      <div className="wrap narrow center notfound">
        <p className="eyebrow eyebrow-dark">404</p>
        <h1>{t.notFound}</h1>
        <p className="body-lg">{t.notFoundText}</p>
        <p>
          <a className="btn btn-gold" href={href({ kind: 'home', lang })}>
            {t.backHome}
            <Icon name="arrow" size={18} />
          </a>
        </p>
      </div>
    </section>
  );
}

export function App({ route }: { route: Route }) {
  let page;
  switch (route.kind) {
    case 'home':
      page = <Home lang={route.lang} />;
      break;
    case 'privacy':
      page = <Privacy lang={route.lang} />;
      break;
    case 'imprint':
      page = <Imprint lang={route.lang} />;
      break;
    case 'support':
      page = <Support lang={route.lang} />;
      break;
    default:
      page = <NotFound lang={route.lang} />;
  }
  return <Layout route={route}>{page}</Layout>;
}
