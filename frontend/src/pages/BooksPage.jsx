import { useEffect, useState } from "react";
import { getBooks } from "../api/books";

import TableBooks from "../components/books/TableBooks";
import ModalBooks from "../components/books/ModalBooks";
import DrawerBooks from "../components/books/DrawerBooks";
import DeleteBookModal from "../components/books/DeleteBookModal";
import ModalBorrowing from "../components/borrowing/ModalBorrowing";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [deleteBookData, setDeleteBookData] = useState(null);
  const [borrowBook, setBorrowBook] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getBooks();
    setBooks(data);
  }

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#662917] text-white px-4 py-2 mb-4 cursor-pointer"
      >
        + Buch hinzufügen
      </button>

      <TableBooks
        books={books}
        onView={setSelectedBook}
        onDelete={setDeleteBookData}
        onBorrow={setBorrowBook}
      />

      {openModal && (
        <ModalBooks onClose={() => setOpenModal(false)} onSaved={load} />
      )}

      {selectedBook && (
        <DrawerBooks
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onBorrow={(book) => {
            setBorrowBook(book);
            setSelectedBook(null);
          }}
        />
      )}

      {borrowBook && (
        <ModalBorrowing
          selectedBook={borrowBook}
          onClose={() => setBorrowBook(null)}
          onSaved={() => {
            load();
            setBorrowBook(null);
          }}
        />
      )}

      {deleteBookData && (
        <DeleteBookModal
          book={deleteBookData}
          onClose={() => setDeleteBookData(null)}
          onDeleted={load}
        />
      )}
    </div>
  );
}
