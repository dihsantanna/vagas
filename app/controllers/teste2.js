import * as service from "../user.service.js";

export const createUser = (req, res) => {
  const { name, job } = req.body;

  if (!job || !name) {
    res
      .status(400)
      .json({ message: 'Campos "name" e "job" são obrigatórios!' });
    return;
  } else if (typeof name !== "string") {
    res.status(400).json({ message: 'Campo "name" deve ser uma string!' });
    return;
  } else if (typeof job !== "string") {
    res.status(400).json({ message: 'Campo "job" deve ser uma string!' });
    return;
  }

  const newUser = service.createUser({
    name,
    job,
  });

  res.status(201).json(newUser);
};
