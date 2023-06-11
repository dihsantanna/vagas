import * as repository from "./user.repository.js";

export const getUserByName = (name) => {
  const user = repository.getUserByName(name);

  if (user) return user;

  throw {
    status: 404,
    message: `Usuário "${name}" não foi encontrado em nosso registro!`,
  };
};

export const getAllUsers = () => {
  const users = repository.getAllUsers();

  return users;
};

export const createUser = ({ name, job }) => {
  return repository.createUser({ name, job });
};

export const deleteUserByName = (name) => {
  const user = repository.getUserByName(name);

  if (!user)
    throw {
      status: 404,
      message: `Usuário "${name}" não foi encontrado em nosso registro!`,
    };

  return repository.deleteUserByName(name);
};

export const userUpdate = (id, { name, job }) => {
  const user = repository.findUserById(id);

  if (!user)
    throw {
      status: 404,
      message: "Usuário não existe!",
    };

  return repository.userUpdate(id, { name, job });
};
