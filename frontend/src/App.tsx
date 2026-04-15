import { Route, Routes } from "react-router-dom";
import Toast from "./components/Toast";
import AuthLayout from "./modules/auth/AuthLayout";
import "./styles/global.css";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import VerifyEmail from "./modules/auth/VerifyEmail";
import ForgotPassword from "./modules/auth/ForgotPassword";
import ResetPassword from "./modules/auth/ResetPassword";

const ProvisoryHome = () => {
  return <h1>This home is provisory</h1>;
};

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route index element={<ProvisoryHome />}></Route>

        <Route element={<AuthLayout />}>
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
