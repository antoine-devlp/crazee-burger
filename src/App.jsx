import { LoginPage } from "./components/pages/login/LoginPage";

import "./App.css";
import { Route, Routes } from "react-router";
import { OrderPage } from "./components/pages/order/OrderPage";
import { ErrorPage } from "./components/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
