import { Router } from "express";
import {
  getAllBooks,
  getOne,
  create,
  remove,
  update,
} from "../controllers/book.controller.js";
import { validateBook, validatePartialBook } from "../middleware/validateBook.middleware.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getOne);
router.post("/", validateBook, create);
router.delete("/:id", remove);
router.patch("/:id", validatePartialBook, update);

export default router;