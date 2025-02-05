import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Heading from "./components/Heading";
import Footer from "./components/footer";
import Filter from "./components/filter";
import CarouselSlider from "./components/carouselSlider";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/loginPage";

// const temptoken = false;

function Dashboard() {
  return (
    <>
      <Navbar />
      <Heading />
      <Filter />
      <Home />
      <CarouselSlider />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
