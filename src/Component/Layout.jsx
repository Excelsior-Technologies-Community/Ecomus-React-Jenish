import React from "react";

import { Outlet } from "react-router-dom";
import HeaderWrap from "./Navbar/HeaderWrap";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <HeaderWrap />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
