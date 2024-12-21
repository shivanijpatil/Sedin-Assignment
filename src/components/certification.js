import "../styles/certification.css";
import trophy from "../images/icons/trophy 1.png";
import customer from "../images/icons/customer-support.png";
import guarantee from "../images/icons/guarantee.png";
import shipping from "../images/icons/shipping.png";

function Certification() {
  return (
    <div className="certification_main">
      <div className="sub_div">
        <img alt="" className="sub_div_icon" src={trophy} />
        <span className="sub_div_title">high quality</span> <br />
        <span className="sub_div_detail">Crafted from top materials </span>
      </div>
      <div className="sub_div">
        <img alt="" className="sub_div_icon" src={guarantee} />
        <span className="sub_div_title">Warranty Protection</span> <br />
        <span className="sub_div_detail">Over 2 years </span>
      </div>
      <div className="sub_div">
        <img alt="" className="sub_div_icon" src={shipping} />
        <span className="sub_div_title">free shipping</span> <br />
        <span className="sub_div_detail">Order over 150 $ </span>
      </div>
      <div className="sub_div">
        <img alt="" className="sub_div_icon" src={customer} />
        <span className="sub_div_title">24 / 7 support</span> <br />
        <span className="sub_div_detail">Dedicated support </span>
      </div>
    </div>
  );
}

export default Certification;
