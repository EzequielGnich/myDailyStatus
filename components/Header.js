import React from "react";

import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <h1>
        <img
          className="h-24 mx-auto py-4"
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
