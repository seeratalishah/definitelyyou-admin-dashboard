import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>

        <Route path="products" element={<ProductsPage/>}></Route>
        <Route path="orders" element={<OrdersPage/>}></Route>

      </Route>
    </Routes>
  );
}

export default App;
