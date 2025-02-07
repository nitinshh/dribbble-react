import { Link } from "react-router-dom";

function mediaKit() {
  return (
    <div className="terms-container">
      {/* Stripe Navigation */}
      <div className="stripe-nav">
        <div className="stripe-options">
          <span className="terms-option">
            <Link to="/about">About Us</Link>
          </span>
          <span className="terms-option">
            <Link to="/careers">Careers at Whatever</Link>
          </span>
          <span className="terms-option">
            <Link to="/media-kit">Media kit</Link>
          </span>
          <span className="terms-option">
            <Link to="/#">Customer stories</Link>
          </span>
          <span className="terms-option">
            <Link to="/#">Advertise</Link>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="terms-title">Media kit</h1>
        <h2 className="terms-subtitle">Our brand assets</h2>
        <p className="terms-description">
          Grab our official Whatever brand resources and learn about usage
          guidelines.
        </p>

        <div className="terms-body">
          <img
            className="about-group-image"
            src="https://framerusercontent.com/images/r2TPSB68WTs74BhWeakoX09TEc.jpg"
            alt="group image"
          />
          <h2>Our name</h2>
          <p className="terms-paragraph">
            The name Whatever came about from the dual metaphors of bouncing
            ideas and leaking your work. Within content, Whatever is spelled
            with a capital D.
          </p>
          <h2>Our logos</h2>
          <p className="terms-paragraph">
            We’ve provided vector versions of our logo and mark for certain uses
            listed below.
          </p>
          {/* Image Grid */}
          <div className="about-images">
            <div className="row">
              <img
                src="https://th.bing.com/th/id/OIP.bQVRwVbN8GH22lu98Q2pdgAAAA?rs=1&pid=ImgDetMain"
                alt="Teamwork"
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/230/7d43a715036099.57fdc15d598e4.jpeg"
                alt="Workspace"
              />
            </div>
          </div>
          <h2>Do’s and Don’ts</h2>
          <p className="terms-paragraph">
            Please don’t do this:
            <p>
              <ul>
                <li>
                  Don’t use these graphics to brand your own website or
                  application.
                </li>
                <li>
                  Don’t manipulate the logos or imply sponsorship, endorsement,
                  or false association with Whatever Holdings Ltd.
                </li>
                <li>
                  Don’t use any other artwork from our site without explicit
                  permission.
                </li>
              </ul>
            </p>
            By all means do this:
            <p>
              <ul>
                <li>Use these graphics to link to Whatever.</li>
                <li>
                  Use these graphics when mentioning Whatever in an article or
                  in print.
                </li>
                <li>Use these graphics to promote your Whatever profile.</li>
              </ul>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default mediaKit;
