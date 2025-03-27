import React, { useState } from "react";
import HeaderContent from "./HeaderContent";
import Header from "./Header";
import Register from "../Register";

function HeaderWrap() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  return (
    <>
      <HeaderContent />
      <Header
        setIsModalOpen={(event) => {
          setIsRegistrationModalOpen(event);
        }}
      />
      <Register isRegistrationModalOpen={isRegistrationModalOpen} />
    </>
  );
}

export default HeaderWrap;
