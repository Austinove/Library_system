import { useEffect, useState } from "react";
import { getShelves } from "../api/shelves";

import TableShelf from "../components/shelves/TableShelf";
import ModalShelf from "../components/shelves/ModalShelf";
import DeleteShelfModal from "../components/shelves/DeleteShelfModal";

export default function ShelvesPage() {
  const [shelves, setShelves] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [editShelf, setEditShelf] = useState(null);
  const [deleteShelfData, setDeleteShelfData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getShelves();
    setShelves(data);
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Regale</h2>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#662917] text-white px-4 py-2 cursor-pointer"
        >
          + Regal hinzufügen
        </button>
      </div>

      <TableShelf
        shelves={shelves}
        onEdit={setEditShelf}
        onDelete={setDeleteShelfData}
      />

      {openModal && (
        <ModalShelf onClose={() => setOpenModal(false)} onSaved={load} />
      )}

      {editShelf && (
        <ModalShelf
          shelf={editShelf}
          onClose={() => setEditShelf(null)}
          onSaved={load}
        />
      )}

      {deleteShelfData && (
        <DeleteShelfModal
          shelf={deleteShelfData}
          onClose={() => setDeleteShelfData(null)}
          onDeleted={load}
        />
      )}
    </div>
  );
}
