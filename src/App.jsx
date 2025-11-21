import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Contribute from "./pages/Contribute/Contribute.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // You just use the relative path!
    // Let's use the 'info.php' file we made earlier for this test.
    fetch("/api/info.php") // Or use /api/get-animals.php
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Use .text() for info.php since it's HTML
        // Use .json() for your actual API files
        return response.text();
      })
      .then((text) => setData("Successfully fetched data from PHP!"))
      .catch((error) => setError(error.toString()));
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colabora" element={<Contribute />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
