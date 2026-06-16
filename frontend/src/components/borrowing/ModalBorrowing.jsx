import { useState } from "react";
import { borrowBook } from "../../api/borrowing";

export default function ModalBorrowing({
  books = [],
  selectedBook = null,
  onClose,
  onSaved,
}) {
  const [bookId, setBookId] = useState(selectedBook?.id || "");
  const [borrowerName, setBorrowerName] = useState("");
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await borrowBook({
        book_id: Number(bookId),
        borrower_name: borrowerName,
        details,
      });

      onSaved();
      onClose();
    } catch (error) {
      console.error("Failed to borrow book:", error);
      alert("Failed to borrow book.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Buch ausleihen</h2>

        <form onSubmit={handleSubmit}>
          {selectedBook ? (
            <>
              <label className="block text-sm mb-1">Buch</label>

              <input
                type="text"
                value={selectedBook.title}
                disabled
                className="border w-full p-2 mb-3 bg-gray-100"
              />
            </>
          ) : (
            <>
              <label className="block text-sm mb-1">Buch</label>

              <select
                required
                className="border w-full p-2 mb-3"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              >
                <option value="">Buch auswählen</option>

                {books.map((book) => (
                  <option key={book.id} value={book.id}>
                    {book.title}
                  </option>
                ))}
              </select>
            </>
          )}

          <label className="block text-sm mb-1">Name des Entleihers</label>

          <input
            type="text"
            required
            placeholder="Name des Entleihers"
            className="border w-full p-2 mb-3"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
          />

          <label className="block text-sm mb-1">Details</label>

          <textarea
            required
            rows={4}
            placeholder="Standort und voraussichtliches Rückgabedatum ..."
            className="border w-full p-2 mb-4"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 cursor-pointer"
            >
              Abbrechen
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#662917] text-white px-4 py-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Wird ausgeliehen ..." : "Ausleihen"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
