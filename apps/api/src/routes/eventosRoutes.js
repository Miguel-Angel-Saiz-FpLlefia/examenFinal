import express from "express";
import "dotenv/config";
import { getEventos } from "../controllers/eventoController.js";

const routerEventos = express.Router();

routerEventos.get("/", getEventos);

export default routerEventos;
