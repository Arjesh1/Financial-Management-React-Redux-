import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  //bring data from redux store
  const {user} = useSelector((state) => state.user);
  return user?.uid ? children : <Navigate to="/" replace />;
  
};
