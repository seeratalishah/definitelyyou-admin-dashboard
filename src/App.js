import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import AddProductPage from "./pages/AddProductPage";
import CustomersPage from "./pages/CustomersPage";
import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>

        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage/>}></Route>
        <Route path="orders" element={<OrdersPage/>}></Route>
        <Route path="addproduct" element={<AddProductPage />}></Route>
        <Route path="customers" element={<CustomersPage />} />

      </Route>
    </Routes>
  );
}

export default App;
