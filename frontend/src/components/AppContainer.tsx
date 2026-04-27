import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserMenu from "./UserMenu";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <span>loading...</span>
  ) : user ? (
    <div>
      <UserMenu email={user.email} />
      <Outlet />
    </div>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ redirectUrl: window.location.pathname }}
    />
  );
};

export default AppContainer;
