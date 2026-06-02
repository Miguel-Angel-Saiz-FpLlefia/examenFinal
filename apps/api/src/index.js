import "dotenv/config";
import express from "express";
import cors from "cors";
import routerEventos from "./routes/eventosRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/events", routerEventos);

app.get("/api", (req, res) => {
  res.json({
    missatge: "Api de eventos",
    verison: "1.0.0",
    endopoints: ["/api/events", "/api/events/:id"],
  });
});

app.listen(PORT, () => {
  console.log(`Servidor volando en el puerto ${PORT}`);
});
