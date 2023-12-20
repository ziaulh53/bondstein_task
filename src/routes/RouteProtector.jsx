import { PrivateLayout } from "../layout/PrivateLayout";
import { PublicLayout } from "../layout/PublicLayout";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

// public routes
export const PublicComponents = ({ element }) => {
  return <PublicLayout>{element}</PublicLayout>;
};

// only unauthorized routes
export const AuthComponents = ({ element }) => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  if(isAuthenticate){
    return <Navigate to="/" />
  }
  return element;
};

// only authorized user routes
export const PrivateComponents = ({ element }) => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  if(!isAuthenticate){
    return <Navigate to="/signin" />
  }
  return <PrivateLayout>{element}</PrivateLayout>;
};
