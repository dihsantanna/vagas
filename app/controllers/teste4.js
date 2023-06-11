import * as service from "../user.service.js";

export const userUpdate = (req, res) => {
  const { id } = req.query;

  const { name, job } = req.body;

  const re = /^\d+$/;

  if (!id) {
    res.status(400).json({ message: `Query "id" é obrigatória!` });
    return;
  } else if (!re.test(id) && +id <= 0) {
    res
      .status(400)
      .json({ message: `Query "id" deve ser um numero maior que zero!` });
    return;
  } else if (!name && !job) {
    res.status(400).json({
      message: `Você deve inserir algo nos campos "name" ou "job" para editar`,
    });
    return;
  } else if (
    (name && typeof name !== "string") ||
    (job && typeof job !== "string")
  ) {
    res.status(400).json({
      message: `Campos "name" e "job" devem ser string`,
    });
  }

  const result = service.userUpdate(+id, { name, job });

  res.status(200).json({
    message: "Usuário editado com sucesso!",
    user: result,
  });
};
