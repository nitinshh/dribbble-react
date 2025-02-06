import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [isEmailSignup, setIsEmailSignup] = useState(false);

  return (
    <div className="container">
      {/* Left Side Image */}
      <div className="image-container">
        <img
          src="https://thumbs.dreamstime.com/b/sign-up-icon-flat-style-finger-cursor-vector-illustration-white-isolated-background-click-button-business-concept-143479797.jpg?w=360"
          alt="Sign Up"
          className="image"
        />
      </div>

      {/* Right Side Form */}
      <div className="form-container">
        {isEmailSignup ? (
          <div className="form">
            <button
              className="back-button"
              onClick={() => setIsEmailSignup(false)}
            >
              <span className="arrow">←</span> Back
            </button>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" className="input-field" />
            <input type="text" placeholder="Username" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <div className="terms">
              <input type="checkbox" id="terms" className="checkbox" />
              <label htmlFor="terms">
                I agree to the terms and conditions.
              </label>
            </div>
            <button className="btn-submit">Create Account</button>
          </div>
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
            <button
              className="btn-email border-none"
              onClick={() => setIsEmailSignup(true)}
            >
              Continue with Email
            </button>
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
