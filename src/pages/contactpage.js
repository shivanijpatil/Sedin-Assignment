import "../styles/contactpage.css";
import logo from "../images/logo.png";
import Certification from "../components/certification";
// import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <div className="contact_banner_section">
        <div>
          <img alt="" className="contact_logo" src={logo} /> <br />
          <span className="contact_title">contact</span>
        </div>
      </div>
      <div className="contact_form_section">
        <div className="contact_form_title">
          <span className="contact_form_title_text">get in touch with us</span>
          <br />
          <p className="contact_form_para">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </div>
        <div className="contact_main_form_div">
          <div className="contact_sub_form_div">
            <div className="contact_sub_form_detail">
              <span className="detail_title">address</span> <br />
              <span className="details">
                236 5th SE Avenue,
                <br /> New York NY10000,
                <br /> United States.
              </span>
            </div>
            <div className="contact_sub_form_detail">
              <span className="detail_title">phone</span> <br />
              <span className="details">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </span>
            </div>
            <div className="contact_sub_form_detail">
              <span className="detail_title">working time</span> <br />
              <span className="details">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
          <div className="contact_sub_form_div">
            <div className="contact_input_section">
              <span className="label">your name</span> <br />
              <input className="input" placeholder="Harry Grace" />
            </div>
            <div className="contact_input_section">
              <span className="label">email address</span> <br />
              <input className="input" placeholder="harrygrace@mail.com" />
            </div>
            <div className="contact_input_section">
              <span className="label">subject</span> <br />
              <input className="input" placeholder="This is an optional" />
            </div>
            <div className="contact_input_section">
              <span className="label">message</span> <br />
              <input className="input" placeholder="Hi!. I'd like to ask about." />
            </div>
            <button className="form_submit_button">submit</button>
          </div>
        </div>
      </div>
      <Certification/>
    </div>
  );
}

export default ContactPage;
