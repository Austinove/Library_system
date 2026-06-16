export default function TableBooks({ books, onView, onDelete, onBorrow }) {
  return (
    <table className="w-full border bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Autor</th>
          <th className="p-2 text-left">Regal</th>
          <th className="p-2 text-left">ISBN</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Aktionen</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="border-t">
            <td className="p-2">{book.title}</td>
            <td className="p-2">{book.author}</td>
            <td className="p-2">{book.shelf_name}</td>
            <td className="p-2">{book.isbn}</td>

            <td className="p-2">
              {book.is_available ? (
                <span className="text-green-600">Verfügbar</span>
              ) : (
                <span className="text-gray-600">Ausgeliehen</span>
              )}
            </td>

            <td className="p-2 flex gap-2">
              <button
                onClick={() => onView(book)}
                className="text-[#662917] cursor-pointer"
              >
                Anzeigen
              </button>

              {book.is_available ? (
                <button
                  onClick={() => onBorrow(book)}
                  className="text-blue-600 cursor-pointer"
                >
                  Ausleihen
                </button>
              ) : (
                <span className="text-gray-400">Ausgeliehen</span>
              )}

              <button
                onClick={() => onDelete(book)}
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
