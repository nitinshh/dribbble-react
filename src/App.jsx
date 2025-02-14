import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/loginPage";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacyPolicy";
import CookiePolicy from "./pages/cookiePolicy";
import CodeOfConduct from "./pages/codeOfConduct";
import About from "./pages/about";
import Careers from "./pages/careers";
import MediaKit from "./pages/mediaKit";
import Testimonials from "./pages/testimonials";
import Advertise from "./pages/advertise";
import { ToastContainer } from "react-toastify";

// const temptoken = false;

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiespolicy" element={<CookiePolicy />} />
        <Route path="/CodeOfConduct" element={<CodeOfConduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/advertise" element={<Advertise />} />
      </Routes>
    </>
  );
}
