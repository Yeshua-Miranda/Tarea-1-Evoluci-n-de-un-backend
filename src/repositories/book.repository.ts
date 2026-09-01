import type { Book } from "../types/book.js";

let books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Erich Gamma",
    year: 1994
  },
];

// Repository es solamente para trabajar con los datos (queries, etc)

export function findAll(author?: string): Book[] {
  if (author) {
    return books.filter((book) => 
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }
  return books;
}

// GET book by id query
export const findById = (id: number) => books.find((book) => book.id === id);

// POST insert new book query
export const create = (book: Book) => {
  books.push(book);
  return book;
};

// DELETE remove book by id query
export const remove = (id: number) => {
  const exists = books.some((book) => book.id === id);
  if (!exists) return false;
  books = books.filter((book) => book.id !== id);
  return true;
};

// Partial para update alguna propiedad del libro, no todas
export const update = (id: number, partialData: Partial<Book>) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null; 
  
  // Agregamos "as Book" para resolver el conflicto de tipos
  books[index] = { ...books[index], ...partialData } as Book;
  
  return books[index];
};
