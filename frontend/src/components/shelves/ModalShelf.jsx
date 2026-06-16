import { useState, useEffect } from "react";
import { createShelf, updateShelf } from "../../api/shelves";

export default function ModalShelf({ shelf, onClose, onSaved }) {
  const isEdit = !!shelf;

  const [shelf_name, setShelf_name] = useState("");

  useEffect(() => {
    if (shelf) {
      setShelf_name(shelf.shelf_name);
    }
  }, [shelf]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isEdit) {
      await updateShelf({
        id: shelf.id,
        shelf_name,
      });
    } else {
      await createShelf({ shelf_name });
    }

    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit Shelf" : "Add Shelf"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            required
            value={shelf_name}
            onChange={(e) => setShelf_name(e.target.value)}
            placeholder="Regalname"
            className="border w-full p-2 mb-4"
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
              className="bg-[#662917] text-white px-4 py-2 cursor-pointer"
            >
              {isEdit ? "Aktualisieren" : "Speichern"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
