import React from "react";

import NavLink from "./parts/NavLink";

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <nav className="bg-gray-500 py-4 text-center shadow-xl">
        <NavLink href="/about">Sobre</NavLink>
        <NavLink href="/register">Cadastro</NavLink>
        <NavLink href="/login">Entrar</NavLink>
        <a
          href="/api/logout"
          className="bg-red-500 hover:bg-red-700 duration-500 text-white font-bold py-3 px-4 rounded-full"
        >
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
