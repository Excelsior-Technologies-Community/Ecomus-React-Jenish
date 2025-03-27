import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import HeaderWrap from "./Component/Navbar/HeaderWrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ResetPassword from "./Component/ResetPassword";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ForgetPassword from "./Component/ForgetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderWrap />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
