export default function DrawerBooks({ book, onClose, onBorrow }) {
  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4">
      <button onClick={onClose} className="text-red-500 cursor-pointer">
        Close
      </button>

      <h2 className="text-xl font-bold mt-4">{book.title}</h2>

      <p>Autor: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Regal: {book.shelf_name}</p>

      <div className="mt-4">
        {book.is_available ? (
          <button
            onClick={() => onBorrow(book)}
            className="bg-[#662917] text-white px-4 py-2 cursor-pointer"
          >
            Dieses Buch ausleihen
          </button>
        ) : null}
      </div>
    </div>
  );
}
