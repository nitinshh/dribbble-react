import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    let validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      if (validationErrors.email) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: validationErrors.email,
        });
      }

      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
        deviceToken: "abc",
      });

      console.log("Login Response:", response.data);

      if (!response.data.body) {
        throw new Error("Invalid response from server.");
      }

      const { token, ...user } = response.data.body;

      if (!token) {
        throw new Error("Token not received from server.");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });

      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);

      let errorMessage = "Invalid email or password!";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="signin_container">
      {/* Left Side Image */}
      <div className="image-container">
        <img
          src="https://thumbs.dreamstime.com/b/login-icon-isolated-white-background-simple-vector-logo-black-230975336.jpg"
          alt="Sign In"
          className="image"
        />
      </div>

      {/* Right Side Form */}
      <div className="login-form-container">
        <h2 className="login-text">Sign in to Whatever</h2>
        <button className="btn-google-login btn-email">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg"
            alt="Google Logo"
            className="google-logo"
          />
          Sign Up with Google
        </button>

        {/* OR Divider with Text */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="button-text mx-4 text-gray-500">
            or sign in with email
          </span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>

        {/* Inputs and Sign In Button */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}

        <button className="btn-submit" onClick={handleLogin}>
          Sign In
        </button>

        <div className="sign-up-link">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="link-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
