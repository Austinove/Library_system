import { BASE_URL } from "./api";

export async function getShelves() {
  const res = await fetch(`${BASE_URL}/shelf`);
  return res.json();
}

export async function createShelf(data) {
  const res = await fetch(`${BASE_URL}/shelf/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function updateShelf(data) {
  const res = await fetch(`${BASE_URL}/shelf/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteShelf(id) {
  const res = await fetch(`${BASE_URL}/shelf/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  return res.json();
}
