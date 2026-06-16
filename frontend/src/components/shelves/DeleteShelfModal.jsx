import { deleteShelf } from "../../api/shelves";

export default function DeleteShelfModal({ shelf, onClose, onDeleted }) {
  async function handleDelete() {
    await deleteShelf(shelf.id);
    onDeleted();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-80 p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-3">Regal löschen</h2>

        <p className="mb-4">Möchten Sie dieses Element wirklich löschen:</p>

        <p className="font-semibold mb-4">{shelf.name}</p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-2 cursor-pointer">
            Abbrechen
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 cursor-pointer"
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}
