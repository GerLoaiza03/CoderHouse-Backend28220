import { createRouter } from "../deps.ts";
import * as colorsController from "../controllers/colors.controller.tsx";

const router = createRouter();

// Muestra el home
router.get("/", colorsController.getHome);

// Procesa el post del formulario
router.post("/", colorsController.postColor);

export default router;
