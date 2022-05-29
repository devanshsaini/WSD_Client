import { Resnik } from "./pages/Resnik";
import { SimpleLesk } from "./pages/SimpleLesk";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <section className="heading">
        <span>WORD SENSE DISAMBIGUATION</span>
      </section>
      <div className="topnav">
        <NavLink activeclassname="active" to="/home">
          Home
        </NavLink>
        {/* <NavLink to="/news">News</NavLink> */}
        <NavLink activeclassname="active" to="/resnik">
          Resnik Algorithm
        </NavLink>
        <NavLink activeclassname="active" to="/simple-lesk">
          Simple Lesk Algorithm
        </NavLink>
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
        <NavLink activeclassname="active" to="/about">
          About
        </NavLink>
      </div>
      <footer>
        <span className="footer-text">Copyright 2022 Hritik Saini</span>
      </footer>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/resnik" element={<Resnik />} />
        <Route path="/simple-lesk" element={<SimpleLesk />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
