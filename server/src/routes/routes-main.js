import { Router } from "express";

import {
  getAllContactos,
  welcomePage,
  getContacto,
  postContacto,
  putContacto,
  deleteContacto,
} from "../functions/functions-test.js";

export const adminRouter = Router();

adminRouter.get("/", welcomePage);
adminRouter.get("/contactos", getAllContactos);
adminRouter.get("/contactos/:id", getContacto);
adminRouter.post("/contactos/", postContacto);
adminRouter.put("/contactos/", putContacto);
adminRouter.delete("/contactos/:id", deleteContacto);
