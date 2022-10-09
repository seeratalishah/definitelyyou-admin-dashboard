import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import ProductsPage from "./pages/ProductsPage";
function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
