import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}></Route>
    </Routes>
  );
}

export default App;
