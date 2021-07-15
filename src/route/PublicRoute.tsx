import { Redirect, Route, RouteProps } from 'react-router-dom';

type PublicRouterProps = {
  isAuthenticated: boolean;
} & RouteProps;

const PublicRoute = ({ isAuthenticated, ...rest }: PublicRouterProps) => {
  if (!isAuthenticated) {
    return <Route {...rest} />;
  }

  return <Redirect to={{ pathname: '/home' }} />;
};

export default PublicRoute;
