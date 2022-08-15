import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./style/style.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photoWeb" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
