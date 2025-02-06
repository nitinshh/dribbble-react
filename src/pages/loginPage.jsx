import { Link } from "react-router";

export default function SignIn() {
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
        <button className="btn-google">
          <img
            src="https://th.bing.com/th/id/OIP.ShioSYl43aFlecWVHOks-wHaHa?rs=1&pid=ImgDetMain"
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
          type="text"
          placeholder="Username or Email"
          className="login-input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input-field"
        />
        <button className="btn-submit">Sign In</button>

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
