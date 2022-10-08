import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import OrdersPage from "./pages/OrdersPage";
function App() {

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="orders" element={<OrdersPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
