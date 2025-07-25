import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Movies_Shows from "./Pages/Movies_Shows";
import Support from "./Pages/Support";
import NotFound from "./Pages/NotFound";
import Subscriptions from "./Pages/Subscriptions";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/Movies_Shows" element={<Movies_Shows />} />        
        {/* 404 sahifa uchun */}
        <Route path="*" element={<NotFound />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/support" element={<Support />} /> */}
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
