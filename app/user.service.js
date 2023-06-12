import * as repository from "./user.repository.js";

export const getUserByName = (name) => {
  const user = repository.getUserByName(name);

  if (user) {
    const { countAccess, ...rest } = user;

    repository.countAccessIncrement(rest.id);

    return rest;
  }

  throw {
    status: 404,
    message: `Usuário "${name}" não foi encontrado em nosso registro!`,
  };
};

export const getAllUsers = () => {
  const users = repository.getAllUsers();

  repository.countAccessIncrementAll();

  return users.map(({ countAccess, ...rest }) => rest);
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

export const getUserAccessByName = (name) => {
  const user = repository.getUserByName(name);

  if (!user) {
    throw {
      status: 404,
      message: `Usuário "${name}" não foi encontrado em nosso registro!`,
    };
  }

  return repository.getUserAccessByName(name);
};
