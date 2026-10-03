import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Monitoring from "../pages/Monitoring";
import Reports from "../pages/Reports";
import About from "../pages/About";
import Settings from "../pages/Settings";
import Help from "../pages/Help";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/monitoramento" element={<Monitoring />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
