import data from "../fakeData.js";

export const getUserByName = (name) =>
  data.find((user) => user.name.toLowerCase() === name.toLowerCase());

export const getAllUsers = () => data;

export const createUser = ({ name, job }) => {
  const id = data.length ? data[data.length - 1].id + 1 : 1;

  const newUser = {
    id,
    name,
    job,
  };

  data.push(newUser);

  return newUser;
};

export const deleteUserByName = (name) => {
  const userIndex = data.findIndex(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );

  data.splice(userIndex, 1);

  return 1;
};

export const findUserById = (id) => data.find((user) => user.id === id);

export const userUpdate = (id, { name, job }) => {
  const userIndex = data.findIndex((user) => user.id === id);

  data[userIndex] = {
    name: name || data[userIndex].name,
    job: job || data[userIndex].job,
  };

  return data[userIndex];
};
