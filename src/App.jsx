import "./App.css";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
