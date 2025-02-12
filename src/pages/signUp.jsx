import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
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
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/users/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userName: formData.userName,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (data.code == 200) {
        if (data.body && data.body.name) {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: data.body.name })
          );
          navigate("/");
        } else {
          console.error("Signup successful but user data is missing:", data);
          alert("Signup successful, but user data is missing!");
        }
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong!");
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
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="input-field"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
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
