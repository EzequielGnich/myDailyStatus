import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import { Pointer } from "../components/parts/Pointer";

export const GoogleMap = (props) => {
  let user = "";

  for (let i = 0; i < props.checkins.length; i++) {
    if (props.user.sub === props.checkins[i].id) {
      user = props.checkins[i];
    }
  }

  const [data, setData] = useState({
    center: {
      // Definida a latitude e longitude do Brasil como padrão
      lat: -14.235004,
      lng: -51.925282,
    },
    zoom: 4,
  });

  useEffect(() => {
    setData({
      center: {
        lat: user.coords.lat,
        lng: user.coords.long,
      },
      zoom: 15,
    });
  }, []);

  return (
    <div style={{ height: "55vh", width: "55vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVo1293N-P_ochRyGEq5vFYUjUmzg7__E" }}
        defaultCenter={data.center}
        defaultZoom={data.zoom}
      >
        <Pointer
          lat={data.center.lat}
          lng={data.center.lng}
          status={user.status}
          user={props.user.name}
        />

        <Pointer lat={"-26.206779"} lng={"-48.908871"} status={"fine"} />
        <Pointer lat={"-26.207210"} lng={"-48.909800"} status={"fine"} />
        <Pointer lat={"-26.208854"} lng={"-48.908501"} status={"flu"} />
        <Pointer lat={"-26.208421"} lng={"-48.907229"} status={"covid"} />
        <Pointer lat={"-26.204840"} lng={"-48.908625"} status={"covid"} />
        <Pointer lat={"-26.205726"} lng={"-48.907380"} status={"flu"} />
        <Pointer lat={"-26.205938"} lng={"-48.913457"} status={"flu"} />
        <Pointer lat={"-26.207324"} lng={"-48.911191"} status={"covid"} />
        <Pointer lat={"-26.207324"} lng={"-48.911481"} status={"flu"} />
      </GoogleMapReact>
    </div>
  );
};
