import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="p-3 hover:text-teal-100 transition duration-500 ease-in-out">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
