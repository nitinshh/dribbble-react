import { Link } from "react-router-dom";

function about() {
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
        <h1 className="terms-title">About us</h1>
        <h2 className="terms-subtitle">The world’s destination for design</h2>
        <p className="terms-description">
          We’re on a mission to build the world’s best community for creatives
          to share, grow, and get hired.
        </p>

        <div className="terms-body">
          <img
            className="about-group-image"
            src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/159542/159542_00_2x.jpg?20181115012239"
            alt="group image"
          />
          <h2>Over trillions pixels showcased. What are you working on?</h2>
          <p className="terms-paragraph">
            Hundreds of millions of people look for design inspiration and
            feedback on Whatever. We help players like you share small
            screenshots (shots) to show off your current projects, boost your
            portfolio, and love what you do—no matter what kind of creative
            professional you are. Founded in 2009, we are a bootstrapped and
            profitable company helping design talent share, grow, and get hired
            by over tens of thousands of today’s most innovative brands around
            the world.
          </p>
          <h2>COMMUNITY GUIDELINES</h2>
          <p className="terms-paragraph">
            Only use social gestures for genuine engagement. Do not use likes,
            follows, and other disingenuous social gestures to draw attention to
            your account. Do not use automations (like bots or scripts) to like,
            save, follow, or disingenuously engage on the platform. Comments
            should be constructive. Do not leave comments that are short on
            substance to draw attention to your own account. Do not leave links
            or direct people to your own work when leaving comments. When
            providing criticism or feedback to other Whatever members, be
            helpful, not mean. Messages should be constructive for the
            recipient. Do not use messages to spam Whatever users. Examples of
            spam include: Advertising your services or products Inappropriate or
            profane messages Deceptive or misleading messages Nonsense or test
            messages Mass messages Impersonating an individual or organization
            Consider leaving observations or questions about a Shot (Example:
            Nice work! What font is that? Etc.) as a comment rather than sending
            a message.
          </p>
          <h2>Get to know us</h2>
          <p className="terms-paragraph">
            Whatever is a 100% remote team. We believe that creative
            collaboration can happen anywhere and want our team to work where
            they feel most comfortable and inspired.
          </p>
          {/* Image Grid */}
          <div className="about-images">
            <div className="row">
              <img
                src="https://as2.ftcdn.net/v2/jpg/04/49/71/69/1000_F_449716901_CLKKmu1qjuDnk3GY9g8EiQDzAqgk1Zev.jpg"
                alt="Teamwork"
              />
              <img
                src="https://www.jll.co.in/images/apac/india/research/Emerging-trends-in-Indias-office-sector.jpg.rendition/cq5dam.web.1280.1280.jpeg"
                alt="Workspace"
              />
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/myhq/image/upload/workspaces/venture-x-sector44gurgaon/r2gyqg.jpg"
                alt="Collaboration"
                className="left-img"
              />
              <div className="right-images">
                <img
                  src="https://media.glassdoor.com/lst2x/49/7c/5c/a5/gds-consulting-team.jpg"
                  alt="Startup"
                />
                <img
                  src="https://www.kenrealty.in/wp-content/uploads/2020/07/Sector-44-ken-Realty.jpg"
                  alt="Discussion"
                />
              </div>
            </div>
          </div>
          <h2>HIRING GUIDELINES</h2>
          <p className="terms-paragraph">
            All work inquiries on Whatever must be for paid design work. No
            design contests or spec work are allowed. Job listings must clearly
            define the offered role, be up-to-date and follow all other Job
            Board Best Practices and Policies. Do not send low-quality Hiring
            messages: Ensure that the designer youre contacting is a good fit
            for your job. Personalize the messages you senddont send boilerplate
            messages. They tend to feel impersonal and lack the detail necessary
            to be appealing. Include the project or position details in your
            first message. Messages that don’t mention a work inquiry may not
            reach the designers inbox. Discrimination based on race, ethnicity,
            gender, sexual orientation, age, disability, or religion will not be
            tolerated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
