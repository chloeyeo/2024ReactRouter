import "./App.css";
import "./assets/css/style.scss";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <h1>logo</h1>
        <ul className="menu">
          <li>
            {/* navlink component has a tag inside! */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/company">Company</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          {/* <li>
            <a href="/">home</a>
          </li> */}
        </ul>
      </div>

      <div className="section">
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route path="/company" element={<div>my company</div>} />
          <Route path="/product" element={<div>my product</div>} />
          <Route path="/community" element={<div>my community</div>} />
          <Route path="/dashboard" element={<div>my dashboard</div>} />
        </Routes>
      </div>
      <div className="footer">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          assumenda.
        </div>
      </div>
    </>
  );
}

export default App;
