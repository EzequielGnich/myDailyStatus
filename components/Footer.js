import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-4">
      <div className="text-center">
        <strong className="text-teal-100">MyDailyStatus</strong> <br />
        Projeto criado durante o{" "}
        <strong className="text-teal-100">Fullstack Lab</strong> realizado
        pelo&nbsp;
        <a href="https://devpleno.com">
          <strong className="text-teal-100"> devpleno.com</strong>
        </a>
        <br />
        <p>
          Implementado por:&nbsp;
          <a href="https://www.linkedin.com/in/ezequielgnich">
            <strong className="text-teal-100">Ezequiel Gnich&nbsp;</strong>
          </a>
          |&nbsp;2020
        </p>
        <p>
          <a href="https://github.com/EzequielGnich/myDailyStatus">
            <strong className="text-teal-100">Repositório:</strong> GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
