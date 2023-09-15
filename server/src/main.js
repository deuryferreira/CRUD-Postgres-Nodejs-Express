import express, { json } from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import { adminRouter } from "./routes/routes-main.js";

export const app = express();

//Configuraciones de express
app.set("port", 3000);
app.set("appName", "CRUD NODE-POSTGRES APP by DF");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // permite acceso en la misma red
app.use(morgan("dev"));

app.use("/", adminRouter);

app.listen(app.get("port"));
console.log(
  `${app.get("appName")} running on port ${app.get("port")}...`.bold.yellow
);
