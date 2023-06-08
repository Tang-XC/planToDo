import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
const Route = () => {
  const elements = useRoutes(routes);
  return elements;
};
export default () => {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};
