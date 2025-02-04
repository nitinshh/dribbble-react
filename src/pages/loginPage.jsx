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
        <button className="btn-google">Sign in with Google</button>

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
          <a
            href="#"
            className="link-signup"
            onClick={() => alert("Redirect to signup page")}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
