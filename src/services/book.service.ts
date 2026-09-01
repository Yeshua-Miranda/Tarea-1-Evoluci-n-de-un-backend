import {
  findAll,
  findById,
  create,
  remove,
  update,
} from "../repositories/book.repository.js";
import type { Book } from "../types/book.js";

export function getBooks(author?: string) {
  return findAll(author);
}

export const getBook = (id: number) => {
  return findById(id);
};

export const createBook = (book: Book) => {
  const newBook = {
    ...book,
    id: Date.now(),
  };
  return create(newBook);
};

export const deleteBook = (id: number) => {
  return remove(id);
};

export const updateBook = (id: number, partialData: Partial<Book>) => {
  return update(id, partialData);
}