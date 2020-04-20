import admin from "firebase-admin";

// currenteDate é uma função para buscar a data atual
import { currentDate } from "./currentDate";
import { distance } from "./geo";
import { db } from "./db";

export const checkExists = async (user) => {
  const todayCheckin = await db
    .collection("markers")
    .doc(currentDate())
    .collection("checks")
    .doc(user)
    .get();

  const todaysData = todayCheckin.data();

  return todaysData;
};

export const findCheckNearbyChekin = async (checkin) => {
  const checkins = await db
    .collection("markers")
    .doc(currentDate())
    .collection("checks")
    .near({
      center: checkin.coordinates,
      radius: 1000,
    })
    .get();

  const checkinsList = [];

  checkins.docs.forEach((doc) => {
    checkinsList.push({
      id: doc.id,
      status: doc.data().status,
      coords: {
        lat: doc.data().coordinates.latitude,
        long: doc.data().coordinates.longitude,
      },
      distance: distance(
        checkin.coordinates.latitude,
        checkin.coordinates.longitude,
        doc.data().coordinates.latitude,
        doc.data().coordinates.longitude
      ).toFixed(2),
    });
  });

  return checkinsList;
};

export const setStatus = async (user, status, data) => {
  await db
    .collection("markers")
    .doc(currentDate())
    .collection("checks")
    .doc(user)
    .set({
      status,
      user: user,
      coordinates: new admin.firestore.GeoPoint(data.lat, data.long),
    });
};
