import * as service from "../user.service.js";

export const getUserAccess = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ message: 'Campo "name" é obrigatório!' });
    return;
  } else if (typeof name !== "string") {
    res.status(400).json({ message: 'Campo "name" deve ser uma string!' });
    return;
  }

  const countAccess = service.getUserAccessByName(name);

  res
    .status(200)
    .json({ message: `Usuário "${name}" foi lido ${countAccess} vezes.` });
};
