import React, { useEffect } from "react";
import auth0 from "../lib/auth0";
import router from "next/router";
import { GoogleMap } from "../components/GoogleMap";
import { Card } from "../components/Card";

import { checkExists, findCheckNearbyChekin } from "../model/markers";

const App = (props) => {
  useEffect(() => {
    if (!props.isAuth) {
      router.push("/");
    } else if (props.forceCreate) {
      router.push("/create-status");
    }
  });

  if (!props.isAuth || props.forceCreate) return null;

  return (
    <div className="flex items-center flex-col">
      <div
        className="flex items-center justify-between p-2 mt-4"
        style={{ width: "90vw" }}
      >
        <div>
          <strong className="my-4 text-center font-bold font-black text-2xl">
            Pessoas próximas a você:
          </strong>
          <GoogleMap {...props} />
        </div>
        <div>
          <strong className="my-4 text-center font-bold font-black text-2xl">
            Meu status:
          </strong>
          <Card {...props} />
        </div>
      </div>
    </div>
  );
};

export default App;

export async function getServerSideProps({ req }) {
  let user = {};
  let isAuth = false;
  let forceCreate = false;
  let checkins = [];

  const session = await auth0.getSession(req);

  if (session) {
    isAuth = true;
    user = session.user;

    const todaysData = await checkExists(session.user.sub);

    if (!todaysData) {
      // Variavel para forçar o usuario a criar uma postagem
      forceCreate = true;
    } else {
      checkins = await findCheckNearbyChekin(todaysData);
    }

    if (todaysData) {
      forceCreate = false; // Quando false não é necessário criar uma postagem
    }
  }
  return {
    props: {
      isAuth,
      user,
      forceCreate,
      checkins,
    },
  };
}
