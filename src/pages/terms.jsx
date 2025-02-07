import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="terms-container">
      {/* Stripe Navigation */}
      <div className="stripe-nav">
        <div className="stripe-options">
          <span className="terms-option">
            <Link to="/terms">Terms of Service</Link>
          </span>
          <span className="terms-option">
            <Link to="/privacypolicy">Privacy Policy</Link>
          </span>
          <span className="terms-option">
            <Link to="/cookiespolicy">Cookie Policy</Link>
          </span>
          <span className="terms-option">
            <Link to="/codeofconduct">Code of Conduct</Link>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="terms-title">Terms of Service</h1>
        <h2 className="terms-subtitle">Our terms of service</h2>
        <p className="terms-description">
          Read our terms below to learn more about your rights and
          responsibilities as a Whatever user.
        </p>

        <div className="terms-body">
          <p className="terms-paragraph">
            Whatever Holdings Limited (the “Whatever Group”) is comprised of
            several companies, which together provide tools to help the world’s
            designers to create, develop and promote their talents (each a
            “Service” and collectively, the “Services”). The companies within
            the Whatever Group each act as the data controller for personal data
            processed in respect of their Services (each a “Group Company” and
            together the “Group Companies”) and referred to as “our,” “we,” or
            “us” below. Our Group Companies operate the Services, which include
            websites, software, mobile services, and applications.
          </p>
          <p className="terms-paragraph">
            This page explains the terms by which you may use our online and/or
            mobile services, website, and software provided on or in connection
            with the Services. These terms apply to all sites to which link to
            these terms, including, but not limited to, Whatever.com,
            creativemarket.com, fontspring.com, fontsquirrel.com, and any
            subdomains thereof. By using the Services, creating an account and
            checking the (or similar) box, or otherwise accessing or using the
            Services, you (1) agree that you have read, understood, and agree to
            be bound by the terms and conditions of these Terms of Service
            (these “Terms”), and (2) also that you have read and acknowledge the
            collection and use of your information as set forth in our privacy
            policy, whether or not you are a registered user of the Services.
          </p>
          <p className="terms-paragraph">
            Your use of certain Services or features of our Services may be
            subject to additional terms. For example, if you purchase a font or
            other Asset from Creative Market, purchase a font from Fontspring,
            or download a font from Font Squirrel, additional license terms for
            the font or Asset may apply (each, a “License”). Similarly, if you
            make a purchase through the Services, an applicable return policy
            may apply. If you sign up to be a seller or affiliate (e.g., on Shop
            and Partner terms on Creative Market or Foundry terms on
            Fontspring), your use of the Services in such a capacity may be
            subject to additional terms. If you engage in sharing content and
            interact with other users in our community (e.g., posting or
            commenting on content at Whatever), your conduct may be subject to
            Community Guidelines. We may offer promotions or contests through
            the Services from time to time, and your participation in these may
            also be subject to additional terms. To the extent additional terms
            affect your use of the Service, those terms (including, but not
            limited to, the licenses and Privacy Policy noted above) are hereby
            incorporated by reference into these Terms.
          </p>
          <p className="terms-paragraph">
            These Terms apply to all visitors, users, buyers, sellers and others
            who access the Services. If you open an account on the Services on
            behalf of an organization or other entity, then (i) includes you and
            that entity, and (ii) you represent and warrant that you are an
            authorized representative of the entity with the authority to bind
            the entity to these Terms, and that you agree to these Terms on the
            entity’s behalf.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
