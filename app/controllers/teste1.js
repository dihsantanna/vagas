import * as service from "../user.service.js";

export const getUser = (req, res) => {
  const { name } = req.query;

  if (!name)
    return res.status(400).json({
      message: 'Query "name" é obrigatória!',
    });

  const user = service.getUserByName(name);

  res.status(200).json(user);
};

export const getUsers = (_req, res) => {
  const users = service.getAllUsers();

  res.status(200).json(users);
};
