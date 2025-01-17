import express from "express";
import * as middlewares from "./middlewares.js";
import * as teste1 from "./controllers/teste1.js";
import * as teste2 from "./controllers/teste2.js";
import * as teste3 from "./controllers/teste3.js";
import * as teste4 from "./controllers/teste4.js";
import * as teste5 from "./controllers/teste5.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send(`
  <h1>Rotas</h1>
  <div>
  <div>get user/</div>
  <div>get users/</div>
  <div>post users/</div>
  <div>delete users/</div>
  <div>put users/</div>
  </div>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2.createUser);
app.delete("/users", middlewares.middlewareAuth, teste3.deleteUser);
app.put("/users", middlewares.middlewareAuth, teste4.userUpdate);
app.get("/users/access", teste5.getUserAccess);

app.use(middlewares.middlewareError);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
