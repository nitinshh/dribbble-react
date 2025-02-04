import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Heading from "./components/Heading";
import Footer from "./components/footer";
import Filter from "./components/filter";
import CarouselSlider from "./components/carouselSlider";
import SignUp from "./pages/signUp";
const temptoken = false;

export default function App() {
  return (
    <>
      {temptoken && <Navbar />}
      <Routes>
        {/* Add other routes for different pages */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {temptoken && (
        <>
          <Heading />
          <Filter />
          <CarouselSlider />
          <Footer />
        </>
      )}
    </>
  );
}
