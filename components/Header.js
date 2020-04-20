import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";

import Navbar from "../components/Navbar";

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMe = async () => {
      const res = await fetch("/api/me");
      const authUser = await res.json();
      setUser(authUser);
    };
    getMe();
  }, []);

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
      <pre>{JSON.stringify(user)}</pre>
    </header>
  );
};

export default Header;
