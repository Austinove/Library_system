import { returnBook } from "../../api/borrowing";

export default function ModalReturn({ item, onClose, onReturned }) {
  async function handleReturn() {
    await returnBook({ id: item.id, book_id: item.book_id });
    onReturned();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-80 p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-3">Buch zurückgeben?</h2>
        <p className="font-semibold mb-4">{item.title}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-2 cursor-pointer">
            Abbrechen
          </button>
          <button
            onClick={handleReturn}
            className="bg-red-600 text-white px-4 py-2 cursor-pointer"
          >
            Zurückgeben
          </button>
        </div>
      </div>
    </div>
  );
}
