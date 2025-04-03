import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Component/Home";
import ResetPassword from "./Component/ResetPassword";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ForgetPassword from "./Component/ForgetPassword";
import Layout from "./Component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
