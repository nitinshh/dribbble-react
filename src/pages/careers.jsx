import { Link } from "react-router-dom";

function careers() {
  return (
    <div className="terms-container">
      {/* Stripe Navigation */}
      <div className="stripe-nav">
        <div className="stripe-options">
          <span className="terms-option">
            <Link to="/about">About Us</Link>
          </span>
          <span className="terms-option">
            <Link to="/careers">Careers at Dribbble</Link>
          </span>
          <span className="terms-option">
            <Link to="/#">Media kit</Link>
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
        <h1 className="terms-title">Careers at Dribbble</h1>
        <h2 className="terms-subtitle">
          Join us in helping bring the world’s creative ideas to life
        </h2>
        <p className="terms-description">
          Our mission is to provide support at every stage of a creative’s
          journey; whether that’s learning the craft, showcasing portfolio work
          and building an audience, or finding freelance or full-time jobs at
          some of the world’s leading design-forward companies. We are building
          the platform that helps designers level up their creative careers.
        </p>

        <div className="terms-body">
          <img
            className="about-group-image"
            src="https://img.freepik.com/free-photo/group-happy-business-people-meeting-office_52137-1203.jpg?w=2000"
            alt="group image"
          />
          <div className="flex-container">
            {/* Left Side: Text Content */}
            <div className="text-content">
              <h2>A culture of communication, collaboration & connection</h2>
              <p className="terms-paragraph">
                We’ve been fully remote since day one, and are building a fully
                distributed team across North America. We believe that creative
                collaboration can happen anywhere, and that working remotely
                shouldn’t have to mean sacrificing a sense of cohesion,
                community, and connection. We’ve seen that by combining
                thoughtful collaboration, frequent communication, and the
                freedom for people to be their authentic selves, you can do your
                best work and inspire others to do the same.
              </p>
              <h2>Our values guide everything</h2>
              <p className="terms-paragraph">
                Our values are part of who we are, what we believe in, what we
                aspire to be, and they are reflected in our actions. They are
                our commitment to one another, and the collective personality of
                our organization. We always strive to lean into the fact that
                when properly practiced, sometimes our values will push us
                outside of our comfort zone.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="image-content">
              <img
                src="https://img.freepik.com/premium-photo/group-hikers-taking-selfie-mountain-winter-generative-ai_145713-13097.jpg"
                alt="hikers glacier selfie"
              />
            </div>
          </div>

          <div className="values-section">
            <div className="values-row">
              {/* Left Column - 01 */}
              <div className="values-box">
                <h2>01</h2>
                <h2>We are all owners</h2>
                <p>
                  Every day, we take the initiative and accept the
                  responsibility—with integrity and courage—to make our company
                  better. We believe that raising the bar is what we owe to each
                  other. We are committed to pursuing learning, innovation, and
                  growth together.
                </p>
              </div>

              {/* Right Column - 02 */}
              <div className="values-box">
                <h2>02</h2>
                <h2>Help customers succeed</h2>
                <p>
                  We come to work every day committed to driving success for our
                  customers. We create value for our community by building and
                  providing meaningful solutions to solve our customers problems
                  and needs. We overcome obstacles, find creative solutions and
                  deliver exceptional results. We’re only successful if our
                  customers are.
                </p>
              </div>
            </div>

            <div className="values-row">
              {/* Left Column - 03 */}
              <div className="values-box">
                <h2>03</h2>
                <h2>Take action, deliver results</h2>
                <p>
                  To make the most impact, we need to solve the most important
                  problems. We measure the results of our work so we can
                  continue to improve. We are relentless in our pursuits of
                  major victories and humble in our successes.
                </p>
              </div>

              {/* Right Column - 04 */}
              <div className="values-box">
                <h2>04</h2>
                <h2>Bring good vibes</h2>
                <p>
                  Our success is driven by our ability to build relationships.
                  We have the courage to foster trust, knowing that it will lead
                  to being able to be our authentic selves, and the ability to
                  communicate and collaborate more effectively together.
                  Paramount to maintaining this inclusive and creative culture
                  is respect for the opinions, ideas, and feelings of others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default careers;
