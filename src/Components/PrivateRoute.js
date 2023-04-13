import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = localStorage.getItem('loggedIn') ;
  
  return auth ? <Outlet/> : 
    <Navigate to="/login" />
  
};

export default PrivateRoute;
