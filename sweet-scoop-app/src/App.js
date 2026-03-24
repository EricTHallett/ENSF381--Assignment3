import Homepage from "./pages/Homepage";
import FlavorsPage from "./pages/FlavorsPage"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flavors" element={<FlavorsPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
