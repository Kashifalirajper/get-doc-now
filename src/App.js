import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/MainPage";
import MainPage from "./Components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Submit } from "./Components/Submit";
import { Controls } from "./Components/Controls";
import CompanySetting from "./Components/CompanySetting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/companySettings" element={<CompanySetting />} />
          <Route path="/general" element={<MainPage />} />
          <Route path="/submitOrder" element={<Submit />} />
          <Route path="/Controls" element={<Controls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
