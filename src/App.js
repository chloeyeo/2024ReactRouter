import "./App.css";
import "./assets/css/style.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import { vData, vData1 } from "./data.js";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Main from "./layout/Main.js";
import Company from "./components/Company.js";
import Product from "./components/Product.js";
import Community from "./components/Community.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main vData={vData} />} />
        <Route path="/com" element={<Company />} />
        <Route path="/prod/:id" element={<Product vData={vData} />} />
        <Route path="/comm" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
