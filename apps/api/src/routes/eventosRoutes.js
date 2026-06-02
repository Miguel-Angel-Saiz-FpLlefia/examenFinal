import express from "express";
import "dotenv/config";
import { getEventos, getEventoById } from "../controllers/eventoController.js";

const routerEventos = express.Router();

routerEventos.get("/", getEventos);
routerEventos.get("/:id", getEventoById);

export default routerEventos;
