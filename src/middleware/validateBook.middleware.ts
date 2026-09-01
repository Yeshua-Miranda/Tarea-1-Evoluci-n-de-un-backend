import type { Request, Response, NextFunction } from "express";

export const validateBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, author, year } = req.body;

  if (!title || typeof title !== "string" || !author || typeof author !== "string") {
    return res.status(400).json({
      message: "title and author are required and must be text",
    });
  }

  if (title.trim().length === 0) {
    return res.status(400).json({
      message: "title cannot be empty or just spaces",
    });
  }

  if(year <= 0 || !Number.isInteger(year)) {
    return res.status(400).json({
      message: "year must be a valid number",
    });
  }

  next();
};

export const validatePartialBook = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, author, year } = req.body;

  // Si envían el título, validamos que sea texto y no esté vacío
  if (title !== undefined) {
    if (typeof title !== "string" || title.trim().length === 0) {
      return res.status(400).json({
        message: "title cannot be empty or just spaces",
      });
    }
  }

  // Si envían el autor, validamos que sea texto y no esté vacío
  if (author !== undefined) {
    if (typeof author !== "string" || author.trim().length === 0) {
      return res.status(400).json({
        message: "author cannot be empty or just spaces",
      });
    }
  }

  // Si envían el año, validamos que sea un número entero positivo
  if (year !== undefined) {
    if (year <= 0 || !Number.isInteger(year)) {
      return res.status(400).json({
        message: "year must be a valid positive integer",
      });
    }
  }

  next();
};