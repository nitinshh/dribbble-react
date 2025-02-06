import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Filter from "./components/filter";
import CarouselSlider from "./components/carouselSlider";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/loginPage";
import Terms from "./pages/terms";

// const temptoken = false;

function Dashboard() {
  return (
    <>
      <Navbar />
      <Banner />
      <Filter />
      <Home />
      <CarouselSlider />
      <Footer />
    </>
  );
}

function TermsPage() {
  return (
    <>
      <Navbar />
      <Terms />
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
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </>
  );
}
