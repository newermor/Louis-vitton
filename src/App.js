import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Home2 from "./pages/home2";
import Home3 from "./pages/home3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home2" element={<Home2 />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
