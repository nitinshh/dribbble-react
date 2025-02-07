import { Link } from "react-router-dom";

function testimonials() {
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
        <h1 className="terms-title">Customer stories</h1>
        <h2 className="terms-subtitle">Our wall of love </h2>
        <p className="terms-description">
          Read what our talented community members are saying about Whatever.
        </p>

        <div className="terms-body">
          <div className="values-section">
            <div className="values-row">
              {/* Left Column - 01 */}
              <div className="values-reviews">
                <h2>Shane Waite</h2>
                <p>
                  I recently moved to LA from Florida and I’ve had steady
                  freelance work all thanks to Whatever. Best investment I’ve
                  made was becoming Pro.
                </p>
              </div>

              {/* Right Column - 02 */}
              <div className="values-reviews">
                <h2>Ben Gold</h2>
                <p>
                  Just wanted to tell you that Whatever has been the best tool
                  ever for finding work. I get awesome, legit inquiries all the
                  time.
                </p>
              </div>
            </div>

            <div className="values-row">
              {/* Left Column - 03 */}
              <div className="values-reviews">
                <h2>Garrett Gee</h2>
                <p>
                  Thanks to Whatever, I, a young designer from a small town in
                  Utah, was able to connect, collaborate, and hire all star
                  designers from around the world to help me with my startup.
                </p>
              </div>

              {/* Right Column - 04 */}
              <div className="values-reviews">
                <h2>Claudiu Cioba</h2>
                <p>
                  Because of Whatever I managed to increase my profit more then
                  10 times in just a year. It was the most amazing experience of
                  my life and I am still living it! Thank you guys for keeping
                  the Whatever community alive!
                </p>
              </div>
            </div>

            <div className="values-row">
              {/* Right Column - 05 */}
              <div className="values-reviews">
                <h2>Kassie Scribner</h2>
                <p>
                  If I’ve made one investment that’s truly paid off, it would be
                  paying for Whatever Pro. Love the projects that I get from
                  there.
                </p>
              </div>

              {/* Right Column - 06 */}
              <div className="values-reviews">
                <h2>Chewy</h2>
                <p>
                  Whatever has been our primary source when looking for talent,
                  half of our design team was found within the community. Anyone
                  looking for top creatives should be using Whatever.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimonials;
