import { Route, Routes } from "react-router-dom";
import Toast from "./components/Toast";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import VerifyEmail from "./modules/auth/VerifyEmail";
import ForgotPassword from "./modules/auth/ForgotPassword";
import ResetPassword from "./modules/auth/ResetPassword";
import Home from "./modules/app/Home";
import AppContainer from "./components/AppContainer";
import AuthContainer from "./components/AuthContainer";
import Profile from "./modules/app/Profile";

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>

        <Route element={<AuthContainer />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="email/verify/:code" element={<VerifyEmail />} />
          <Route path="password/forgot" element={<ForgotPassword />} />
          <Route path="password/reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
