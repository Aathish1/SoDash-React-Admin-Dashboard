import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Pro from "./pages/pro";
import UsersPage from "./pages/UsersPage";
import Sales from "./pages/Sales";
import Sidebar from "./components/sidebar";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="flex h-screen  w-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* {BG} */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Pro />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
