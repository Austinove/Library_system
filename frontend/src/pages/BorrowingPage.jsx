import { useEffect, useState } from "react";
import { getBorrowedBooks } from "../api/borrowing";

import TableBorrowing from "../components/borrowing/TableBorrowing";
import ModalBorrowing from "../components/borrowing/ModalBorrowing";
import ReturnBorrowModal from "../components/borrowing/ModalReturn";
import { getBooks } from "../api/books";

export default function BorrowingPage() {
  const [borrowed, setBorrowed] = useState([]);
  const [books, setBooks] = useState([]);

  const [openBorrowModal, setOpenBorrowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [returnItem, setReturnItem] = useState(null);

  useEffect(() => {
    load();
    loadBooks();
  }, []);

  async function load() {
    const data = await getBorrowedBooks();
    setBorrowed(data);
  }

  async function loadBooks() {
    const data = await getBooks();
    setBooks(data);
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Ausleihen</h2>

        <button
          onClick={() => setOpenBorrowModal(true)}
          className="bg-[#662917] text-white px-4 py-2 cursor-pointer"
        >
          + Buch ausleihen
        </button>
      </div>

      <TableBorrowing borrowed={borrowed} onReturn={setReturnItem} />

      {openBorrowModal && (
        <ModalBorrowing
          books={books}
          onClose={() => setOpenBorrowModal(false)}
          onSaved={() => {
            load();
            loadBooks();
          }}
        />
      )}

      {returnItem && (
        <ReturnBorrowModal
          item={returnItem}
          onClose={() => setReturnItem(null)}
          onReturned={load}
        />
      )}
    </div>
  );
}
