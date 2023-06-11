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
