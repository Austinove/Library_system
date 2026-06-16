import { useEffect, useState } from "react";
import { createBook } from "../../api/books";
import { getShelves } from "../../api/shelves";

export default function ModalBooks({ onClose, onSaved }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [shelfId, setShelfId] = useState("");
  const [shelves, setShelves] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getShelves().then(setShelves);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    await createBook({
      title,
      author,
      isbn,
      shelf_id: shelfId,
    });

    setLoading(false);
    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Buch hinzufügen</h2>

        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="Title"
            className="border w-full p-2 mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            required
            placeholder="Autor"
            className="border w-full p-2 mb-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            required
            placeholder="ISBN"
            className="border w-full p-2 mb-2"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />

          <select
            required
            className="border w-full p-2 mb-4"
            value={shelfId}
            onChange={(e) => setShelfId(e.target.value)}
          >
            <option value="">Regal auswählen</option>
            {shelves.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border cursor-pointer"
            >
              Abbrechen
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#662917] text-white px-4 py-2 cursor-pointer"
            >
              {loading ? "Wird gespeichert ..." : "Speichern"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
