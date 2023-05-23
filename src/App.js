import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Property from "./pages/property/Property";
import PropertyDetails from "./pages/property/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/property" element={<Property />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
