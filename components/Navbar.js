import React from "react";

import NavLink from "./parts/NavLink";
import { useAuth } from "../lib/authContext";

const Navbar = () => {
  const auth = useAuth();
  console.log(auth.user.name);
  return (
    <div>
      <nav className="bg-gray-500 py-4 text-center shadow-xl">
        {auth.isAuth && <NavLink href="/app">Pagina Inicial</NavLink>}
        <NavLink href="/about">Sobre</NavLink>
        {auth.isAuth && <NavLink href="/register">Cadastro</NavLink>}
        {auth.isAuth && (
          <a
            href="/api/logout"
            className="bg-red-500 hover:bg-red-700 duration-500 text-white font-bold py-3 px-4 rounded-full"
          >
            Logout {auth.user.name}
          </a>
        )}
        {!auth.isAuth && (
          <a
            href="/api/login"
            className="bg-green-500 hover:bg-green-700 duration-500 text-white font-bold py-3 px-4 rounded-full"
          >
            Login
          </a>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
