import { Redirect, Route, RouteProps } from 'react-router-dom';

type ProtectedRouterProps = {
  isAuthenticated: boolean;
} & RouteProps;

const ProtectedRoute = ({ isAuthenticated, ...rest }: ProtectedRouterProps) => {
  if (isAuthenticated) {
    return <Route {...rest} />;
  }

  return <Redirect to={{ pathname: '/' }} />;
};

export default ProtectedRoute;
