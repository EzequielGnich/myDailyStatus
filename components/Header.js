import React from "react";
// import { useAuth } from "../lib/authContext";

import Navbar from "../components/Navbar";

const Header = () => {
  // const auth = useAuth();

  return (
    <header className="bg-gray-200">
      <h1>
        <img
          className="h-20 mx-auto py-4"
          src="/logo.png"
          alt="Logotipo FSL"
          height="60"
        />
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
