import React from "react";
import { Status } from "../lib/statusConv";

export const Card = (props) => {
  const status = props.checkins[0].status;
  let textInfo = "Eu estou com covid e recebendo tratamento";

  if (status === "fine") {
    textInfo = "Eu estou bem e estou me cuidando!";
  } else if (status === "flu") {
    textInfo = "Eu estou com um resfriado/gripe mas estou me cuidando!";
  }

  return (
    <div className="max-w-sm max-h-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.user.picture} alt="Imagem de perfil" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <strong>{props.user.family_name}</strong>,&nbsp;
          <strong>{props.user.given_name}</strong>
        </div>
        <div>
          <a href="https://coronavirus.saude.gov.br/">
            <div className="text-center py-4 lg:px-4">
              <div
                className={`p-2 ${
                  status === "fine"
                    ? "bg-green-400"
                    : status === "flu"
                    ? "bg-yellow-400"
                    : "bg-red-800"
                } items-center text-white text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
                role="alert"
              >
                <Status {...props} />

                <span className="font-semibold mr-2 text-left flex-auto">
                  {textInfo}
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #fiqueemcasa
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #quarentena
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #covid19
        </span>
      </div>
    </div>
  );
};
