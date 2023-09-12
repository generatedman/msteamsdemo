import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouteDefinition } from '../models/route-definition';

export default class RouterHelper {
	public static RenderRoutes(routes: RouteDefinition[]): JSX.Element {
    return (
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.route}
              path={route.route}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    );
  }
}
