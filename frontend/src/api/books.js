import { BASE_URL } from "./api";

export async function getBooks() {
  const res = await fetch(`${BASE_URL}/books`);
  return res.json();
}

export async function createBook(data) {
  const res = await fetch(`${BASE_URL}/books/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteBook(id) {
  const res = await fetch(`${BASE_URL}/books/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  return res.json();
}

export async function updateBook(data) {
  const res = await fetch(`${BASE_URL}/books/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
