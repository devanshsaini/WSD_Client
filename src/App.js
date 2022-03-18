import { Resnik } from "./pages/Resnik";
import { SimpleLesk } from "./pages/SimpleLesk";
import { Routes, Route, Link, Navigate } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <h2><Link to="/resnik">Resnik Algorithm</Link></h2>
        <h2><Link to="/simple-lesk">Simple Lesk Algorithm</Link></h2>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate replace to="/resnik" />} />
        <Route path="/resnik" element={<Resnik />} />
        <Route path="/simple-lesk" element={<SimpleLesk />} />
      </Routes>
    </div>
  );
}

export default App;
