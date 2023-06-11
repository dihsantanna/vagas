import * as service from "../user.service.js";

export const deleteUser = (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ message: 'Query "name" é obrigatória!' });
    return;
  }

  const result = service.deleteUserByName(name);

  res.status(200).json({ message: `Usuário ${name} excluído com sucesso!` });
};
