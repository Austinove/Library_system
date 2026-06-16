export default function TableBorrowing({ borrowed, onReturn }) {
  return (
    <table className="w-full border bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Buch</th>
          <th className="p-2 text-left">Entleiher</th>
          <th className="p-2 text-left">Ausleihdatum</th>
          <th className="p-2 text-left">Details</th>
          <th className="p-2 text-left">Aktionen</th>
        </tr>
      </thead>

      <tbody>
        {borrowed.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="p-2">{item.title}</td>
            <td className="p-2">{item.borrower_name}</td>
            <td className="p-2">{item.created_at}</td>
            <td className="p-2">{item.details}</td>

            <td className="p-2">
              {item.active == 1 ? (
                <button
                  onClick={() => onReturn(item)}
                  className="text-green-700 cursor-pointer"
                >
                  Zurückgeben
                </button>
              ) : (
                <span className="text-gray-400 text-weight-500">
                  Zurückgegeben
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
