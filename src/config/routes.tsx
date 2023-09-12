import { Home, Configure } from '../pages';
import { RouteDefinition } from '../models/route-definition';

const routes: RouteDefinition[] = [
  {
    route: '/configure',
    element: <Configure />,
    authenticated: false,
  },
  {
    route: '/',
    element: <Home />,
    authenticated: true,
  },
];

export default routes;
