import { routes } from './config';
import { RouterHelper } from './helpers';
import * as msTeams from '@microsoft/teams-js';

function App() {
  msTeams.app.initialize();

  return RouterHelper.RenderRoutes(routes);
}

export default App;
