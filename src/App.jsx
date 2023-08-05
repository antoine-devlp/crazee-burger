import { LoginPage } from "./components/pages/login/LoginPage";
import { OrderPage } from "./components/pages/order/OrderPage";
import { ErrorPage } from "./components/pages/error/ErrorPage";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
