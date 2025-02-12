import { Link } from "react-router-dom";

function privacyPolicy() {
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
        <h1 className="terms-title">Privacy policy</h1>
        <h2 className="terms-subtitle">
          Our commitment to protecting your privacy
        </h2>
        <p className="terms-description">
          Learn more about how Whatever collects and uses data and your rights
          as a Whatever user.
        </p>

        <div className="terms-body">
          <h2>INTRODUCTION</h2>
          <p className="terms-paragraph">
            Whatever Holdings Limited (the “Whatever Group”) is comprised of
            several companies, which together provide tools to help the world’s
            designers to create, develop and promote their talents (each a
            “Service” and collectively, the “Services”). The companies within
            the Whatever Group each act as the data controller for personal data
            processed in respect of their Services (each a “Group Company” and
            together the “Group Companies”) and referred to as “our,” “we,” or
            “us” below. The data controllers for each Service are: Whatever -
            Whatever Holdings Ltd Creative Market - Creative Market Labs, Inc.
            Fontspring - Creative Market Labs, Inc. Font Squirrel - Creative
            Market Labs, Inc. We know that you care about how your information
            is used and shared. This Privacy Policy provides details of the way
            in which the Group Companies process personal data in line with
            their obligations under relevant data protection law, including the
            European Union’s General Data Protection Regulation (the “GDPR”),
            the Cali
          </p>
          <p className="terms-paragraph">
            This Privacy Policy explains what information of yours will be
            collected by the Group Companies when you use our Services, how the
            information will be used, and how you can control the collection,
            correction and/or deletion of information. Note that certain third
            parties may be able to identify you across sites and services and
            over time using the information they process, however, any such
            processing not done at the direction of us is outside the scope of
            this Privacy Policy. We are not responsible for the privacy
            policies, content or security of any linked third party websites or
            services. We recommend that you check the privacy and security
            policies of each and every website and service that you visit.
          </p>
          <h2>INFORMATION WE PROCESS.</h2>
          <p className="terms-paragraph">
            The types of information we process depends on how you use our
            Services. Many of our Services require users to set up an account,
            which involves the collection and processing of your name and email
            address. Other Services may require the collection of additional
            information. For example, Whatever helps to connect its community of
            designers with people and companies in need of their skills. In
            order to do so, Whatever collects payments data and other
            information required to comply with relevant legal obligations. The
            following table explains the types of information we collect and how
            we collect it. These categories of data may collectively be referred
            to as “Your Information”.
          </p>
          <h2>Sensitive Personal Data</h2>
          <p className="terms-paragraph">
            Data Protection Law recognises that certain types of information
            require additional protection. In particular, the GDPR prohibits the
            processing of sensitive personal data, other than in certain
            exceptional circumstances. Sensitive personal data in the EU
            includes information relating to one’s race or ethnicity, political
            opinions, religious or philosophical beliefs, membership of a trade
            union, as well as biometric data and data relating to one’s health
            or sexual orientation. Certain state laws in the US also have
            different definitions of sensitive personal data. We do not
            knowingly collect or process any sensitive personal data. However,
            some users may make such information public through their use of our
            Services. For example, Whatever permits users to add a biography to
            their profile. This is a free-text section that allows users to
            include whatever information they wish, subject to complying with
            the relevant Terms of Service. Users are in control of what
            information they share and, to the extent they choose to make
            sensitive personal data public, they may delete or amend this
            information at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default privacyPolicy;
