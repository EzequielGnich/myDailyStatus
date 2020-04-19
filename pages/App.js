import React, { useEffect } from "react";
import auth0 from "../lib/auth0";
import router from "next/router";
import { db } from "../lib/db";

const App = (props) => {
  useEffect(() => {
    if (!props.isAuth) router.push("/");
  });

  if (!props.isAuth) return null;

  return (
    <div>
      <h1>App</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default App;

export async function getServerSideProps({ req }) {
  const session = await auth0.getSession(req);
  if (session) {
    const todayCheckin = await db
      .collection("markers")
      .doc("2020-04-19")
      .collection("checks")
      .doc(session.user.sub)
      .get();

    console.log(todayCheckin.data());

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
