import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row"
        style={{ width: "80vw", marginTop: "15px" }}
      >
        <div>
          <img src="https://portalarquivos.saude.gov.br/images/png/2020/April/14/logo.png" />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <img src="https://portalarquivos.saude.gov.br/images/jpeg/2020/April/14/painel-de-insumos.jpeg" />
        </div>
      </div>
      <div className="w-auto h-full flex flex-row justify-between items-baseline">
        <div className="flex flex-col w-full p-4">
          <span className="uppercase font-bold" style={{ marginTop: "4em" }}>
            o que você precisa saber
          </span>
          <a
            className="mt-4 bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://coronavirus.saude.gov.br/sobre-a-doenca#o-que-e-covid"
          >
            O que é COVID-19
          </a>
          <a
            className="mt-4 bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://coronavirus.saude.gov.br/sobre-a-doenca#sintomas"
          >
            Quais os sintomas
          </a>
          <a
            className="mt-4 bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://coronavirus.saude.gov.br/sobre-a-doenca#transmissao"
          >
            Como é transmitido
          </a>
          <a
            className="mt-4 bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://coronavirus.saude.gov.br/sobre-a-doenca#diagnostico"
          >
            Diagnóstico
          </a>
        </div>
        <div className="flex flex-col w-full p-4 ml-48">
          <div className="flex flex-col">
            <small className="font-light text-sm">21/04/2020 14h19</small>
            <strong className="font-medium text-lg">
              R$ 37 milhões a mais para tratamento de pacientes de hemodiálise
            </strong>
          </div>

          <div className="flex flex-col">
            <small className="font-light text-sm">20/04/2020 22h30</small>
            <strong className="font-medium text-lg">
              Saúde abre chamamento público para compra de mais 12 milhões de
              testes rápidos
            </strong>
          </div>

          <div className="flex flex-col">
            <small className="font-light text-sm">20/04/2020 22h26</small>
            <strong className="font-medium text-lg">
              Ministério da Saúde amplia para 46,2 milhões aquisição de testes
            </strong>
          </div>

          <div className="flex flex-col">
            <small className="font-light text-sm">21/04/2020 14h19</small>
            <strong className="font-medium text-lg">
              R$ 37 milhões a mais para tratamento de pacientes de hemodiálise
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
