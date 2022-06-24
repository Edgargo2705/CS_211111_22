// Depedencias
import express from "express";
import cors from "cors";

// Importaciones
import { api } from "./config/config.js";
import user from "./router/user.js";
import imagenes from "./router/imagenes.js"
import fathers from "./router/fathers.js"
import sons from "./router/sons.js"

// Inicializaciones dependencias
const app = express();

//Routers
app.use("/api/user", user);
app.use("/api/father", fathers);
app.use("/api/son", sons);
app.use("/api/imagenes", imagenes);

app.use(cors({ origin: true, credentials: false }));

//Servidor activo
app.listen(api.port, () => {
  console.log(`Servidor corriendo en el puerto => ${api.port}`);
});
