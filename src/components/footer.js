import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="main_footer">
        <div className="sub_footer">
          <span className="footer_title">Furniro.</span> <br />
          <span className="footer_address">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA.
          </span>
        </div>

        <div className="sub_footer">
          <span className="footer_link_title">Links</span>
          <br />
          <span className="footer_link">
            <Link to="/">Home</Link>
          </span>
          <br />
          <span className="footer_link">
            <Link to="/shop">shop</Link>
          </span>
          <br />
          <span className="footer_link">
            <Link to="/about">about</Link>
          </span>
          <br />
          <span className="footer_link">
            <Link to="/contact">contact</Link>
          </span>
          <br />
        </div>

        <div className="sub_footer">
          <span className="footer_link_title">Helps</span>
          <br />
          <span className="footer_link">
            <Link to="/">payment options</Link>
          </span>
          <br />
          <span className="footer_link">
            <Link to="/">returns</Link>
          </span>
          <br />
          <span className="footer_link">
            <Link to="/">privacy policies</Link>
          </span>
          <br />
        </div>

        <div className="sub_footer">
          <span className="footer_link_title">Newsletter</span>
          <br />
          <span className="footer_link">
            <input type="email"
              className="footer_email_subscription"
              placeholder="Enter Your Email Address"
            />
          </span>
          <button className="footer_subscription_button">subscribe</button>
          <br />
        </div>
      </div>
      <hr className="footer_hr" />
      <span className="footer_copywrite">&copy; 2023 Furino. All rights reverved.</span>
    </div>
  );
}

export default Footer;
