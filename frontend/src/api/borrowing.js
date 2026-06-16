import { BASE_URL } from "./api";

export async function getBorrowedBooks() {
  const res = await fetch(`${BASE_URL}/borrow/borrowed_books`);
  return res.json();
}

export async function borrowBook(data) {
  const res = await fetch(`${BASE_URL}/borrow/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function returnBook(data) {
  const res = await fetch(`${BASE_URL}/borrow/returned`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
