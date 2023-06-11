import data from "../fakeData.js";

export const getUserByName = (name) =>
  data.find((user) => user.name.toLowerCase() === name.toLowerCase());

export const getAllUsers = () => data;
