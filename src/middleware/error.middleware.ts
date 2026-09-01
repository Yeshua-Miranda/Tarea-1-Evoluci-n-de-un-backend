import type { Request, Response, NextFunction } from "express";

// Express sabe que es un middleware de errores porque tiene 4 parámetros
export const errorHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error(`[Error]: ${err.message}`);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: err.message || "Internal Server Error",
  });
};