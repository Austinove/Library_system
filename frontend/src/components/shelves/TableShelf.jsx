export default function TableShelf({ shelves, onEdit, onDelete }) {
  return (
    <table className="w-full border bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">ID</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Aktionen</th>
        </tr>
      </thead>

      <tbody>
        {shelves.map((shelf) => (
          <tr key={shelf.id} className="border-t">
            <td className="p-2">{shelf.id}</td>
            <td className="p-2">{shelf.shelf_name}</td>

            <td className="p-2 flex gap-2">
              <button
                onClick={() => onEdit(shelf)}
                className="text-[#662917] cursor-pointer"
              >
                Bearbeiten
              </button>

              <button
                onClick={() => onDelete(shelf)}
                className="text-red-600 cursor-pointer"
              >
                Löschen
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
