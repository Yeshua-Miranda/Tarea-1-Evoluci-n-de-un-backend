import type { NextFunction, Request, Response } from "express";
import {
  getBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook,
} from "../services/book.service.js";

export function getAllBooks(req: Request, res: Response,next: NextFunction) {

  //throw new Error("Simulando una caída de la base de datos");

  try {
    const author = req.query.author as string;
    res.json(getBooks(author));
  } catch (error) {
    // se lo pasa al middleware de errores
    next(error); 
  }

}

export const getOne = (req: Request, res: Response,next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const book = getBook(id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const create = (req: Request, res: Response,next: NextFunction) => {
  try {
    const book = createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

export const remove = (req: Request, res: Response,next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const deleted = deleteBook(id);
    if (!deleted) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const update = (req: Request, res: Response,next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const updatedBook = updateBook(id, req.body);

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
}