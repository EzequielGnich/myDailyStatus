import React from "react";

export const Status = (props) => {
  const userStatus = props.checkins[0].status;
  let text = "Saúdavel";

  if (userStatus === "flu") {
    text = "Gripe";
  } else if (userStatus === "covid") {
    text = "COVID-19";
  }

  return (
    <span
      className={`flex rounded-full ${
        userStatus === "fine"
          ? "bg-green-500"
          : userStatus === "flu"
          ? "bg-yellow-500"
          : "bg-red-500"
      }  text-white uppercase px-2 py-1 text-xs font-bold mr-3`}
    >
      {text}
    </span>
  );
};
