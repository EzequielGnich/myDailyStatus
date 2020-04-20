import React, { useState } from "react";
import router from "next/router";
import axios from "axios";
import auth0 from "../lib/auth0";

const CreateStatus = () => {
  const [dados, setDados] = useState({
    status: "fine",
    coords: {
      lat: null,
      long: null,
    },
  });
  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setDados((old) => {
          return {
            ...old,
            coords: {
              lat: position.coords.latitude,
              long: position.coords.longitude,
            },
          };
        });
      });
    }
  };

  const saveMyStatus = async () => {
    const { data } = await axios.post("/api/save-status", dados);

    if (data.msg === "ok") {
      return router.push("/app");
    }
  };

  const onStatusChange = (e) => {
    const value = e.target.value;
    setDados((old) => {
      return {
        ...old,
        status: value,
      };
    });
  };
  return (
    <div>
      <h1>Create</h1>
      <div className="block">
        <input
          type="radio"
          className="mx-3"
          name="status"
          id="fine"
          onClick={onStatusChange}
          value="fine"
        />
        <label htmlFor="fine">Eu estou bem.</label>
      </div>
      <div className="block">
        <input
          type="radio"
          className="mx-3"
          name="status"
          id="flu"
          onClick={onStatusChange}
          value="flu"
        />
        <label htmlFor="flu">Eu estou com gripe/resfriado.</label>
      </div>
      <div className="block">
        <input
          type="radio"
          className="mx-3"
          name="status"
          id="covid"
          onClick={onStatusChange}
          value="covid"
        />
        <label htmlFor="covid">Eu estou com sintomas de COVID.</label>
      </div>
      <div>
        <strong>Sua posição atual é: {JSON.stringify(dados)}</strong>
      </div>
      <button onClick={getMyLocation}>Pegar minha Posição</button>
      <button onClick={saveMyStatus}>Salvar meu status</button>
    </div>
  );
};

export default CreateStatus;

export async function getServersideProps({ req }) {
  const session = await auth0.getSession(req);
  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user,
      },
    };
  }
  return {
    props: {
      isAuth: false,
      user: {},
    },
  };
}
