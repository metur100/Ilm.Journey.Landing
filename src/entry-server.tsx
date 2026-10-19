import { renderToString } from 'react-dom/server';

import { App } from './App';
import { allRoutes, headHtml, routePath, type Route } from './routes';

export { allRoutes, routePath };
export { LANGS, LANG_NAMES, SITE } from './content/site';
export { UI } from './content/copy';

export function render(route: Route) {
  return { html: renderToString(<App route={route} />), head: headHtml(route), lang: route.lang };
}
