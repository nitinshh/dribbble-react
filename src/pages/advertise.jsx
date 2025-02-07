import { Link } from "react-router-dom";

function advertise() {
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
            <Link to="/testimonials">Customer stories</Link>
          </span>
          <span className="terms-option">
            <Link to="/advertise">Advertise</Link>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="terms-title">Advertise</h1>
        <h2 className="terms-subtitle">
          Connect with creative, product, & business decision makers worldwide{" "}
        </h2>

        <div className="advertise-body">
          {/* Images Row */}
          <div className="advertise-images">
            <img
              className="advertise-img"
              src="https://framerusercontent.com/images/KXCRq85NaenbXL0RzauFZqsK2Q.png?scale-down-to=512"
              alt="group image"
            />
            <img
              className="advertise-img"
              src="https://framerusercontent.com/images/yWy6bJKejlKvxywIlEFwWYenZaY.png"
              alt="group image"
            />
            <img
              className="advertise-img"
              src="https://framerusercontent.com/images/BB0SnMBGcJT8Hm4uHG4PUfQEY.jpg?scale-down-to=512"
              alt="group image"
            />
          </div>

          <div className="advertise-text">
            <h2 className="advertise-title">
              Stop interrupting. Start inspiring with bespoke native ads,
              editorial, and much more.
            </h2>
            <p className="advertise-paragraph">
              Advertise your brand organically within Whatever’s design
              inspiration feeds. Our native Boosted Shots act just like the
              regular Whatever shots designers post on our website – just way
              more visible. Keep the conversation going by tapping into our
              community with custom editorial placements, our interactive
              “Playoffs”, email integrations, and so much more. Whether driving
              awareness, announcing a product launch, or showcasing a special
              offer, we have your hard to reach audience and you have control
              over the design, copy, CTA, and destination.
            </p>
            <h2 className="advertise-title">Why advertise on Whatever?</h2>
            <p className="advertise-paragraph">
              With Whatever, you can reach an audience and community like
              nowhere else. Whatever is the go-to resource for discovering and
              connecting with thought leaders and tastemakers. Designers,
              product pros, and business decision-makers from around the globe
              rely on Whatever for creating and curating future trends and
              projects. We’ll connect your brand to this creative community and
              its fans at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default advertise;
