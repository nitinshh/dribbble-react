import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [errors, setErrors] = useState({});
  const [isEmailSignup, setIsEmailSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.userName) newErrors.userName = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post("http://localhost:3000/users/signUp", {
        name: formData.name,
        email: formData.email,
        userName: formData.userName,
        password: formData.password,
      });

      if (response.data.code === 200) {
        toast.success("Signup successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      console.error("Error during signup:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message, { position: "top-right" });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://thumbs.dreamstime.com/b/sign-up-icon-flat-style-finger-cursor-vector-illustration-white-isolated-background-click-button-business-concept-143479797.jpg?w=360"
          alt="Sign Up"
          className="image"
        />
      </div>

      <div className="form-container">
        {isEmailSignup ? (
          <form className="form" onSubmit={handleSubmit}>
            <button
              className="back-button"
              onClick={() => setIsEmailSignup(false)}
              type="button"
            >
              <span className="arrow">←</span> Back
            </button>
            <h2>Sign Up</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="input-field"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            {errors.userName && <p className="error-text">{errors.userName}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                className="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <label htmlFor="terms">
                I agree to the terms and conditions.
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="error-text">{errors.agreeToTerms}</p>
            )}

            <button className="btn-submit" type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Create Account"}
            </button>
          </form>
        ) : (
          <div className="alternative">
            <h2>Sign Up for Whatever</h2>
            <button className="btn-google">
              <img
                src="https://th.bing.com/th/id/OIP.ShioSYl43aFlecWVHOks-wHaHa?rs=1&pid=ImgDetMain"
                alt="Google Logo"
                className="google-logo"
              />
              Sign Up with Google
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>
            <button
              className="btn-email border-none"
              onClick={() => setIsEmailSignup(true)}
            >
              Continue with Email
            </button>
            <p className="smaller-text mt-4">
              By creating an account you agree with our{" "}
              <Link to="/terms">Terms of Service</Link>,{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>, and{" "}
              <Link to="/notifications">our default Notification Settings</Link>
              .
            </p>
            <div className="sign-in-link mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="link-signin">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
