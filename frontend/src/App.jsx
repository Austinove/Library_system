import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import BooksPage from "./pages/BooksPage";
import ShelvesPage from "./pages/ShelvesPage";
import BorrowingPage from "./pages/BorrowingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="shelves" element={<ShelvesPage />} />
          <Route path="borrowing" element={<BorrowingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
