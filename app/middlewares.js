import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

export const middlewareError = (err, _req, res, next) => {
  if (err) {
    res.status(err.status || 500).json({
      message: err.message,
    });
  }
  next();
};

export const middlewareAuth = (req, res, next) => {
  const token = req.headers.authorization;

  const currentFilePath = fileURLToPath(import.meta.url);

  const parentDirectory = path.dirname(currentFilePath);

  const secretTokenPath = path.join(parentDirectory, "../secret_token");
  const secretToken = readFileSync(secretTokenPath, {
    encoding: "utf8",
  }).trim();

  let message;

  if (!token) {
    message = "Token é obrigatório!";
  } else if (token !== secretToken) {
    message = "Usuário não tem autorização para esta requisição!";
  }

  if (message) {
    res.status(401).json({ message });
    return;
  }

  next();
};
