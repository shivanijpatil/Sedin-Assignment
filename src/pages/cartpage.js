import React from "react";
import Certification from "../components/certification";
import "../styles/cartpage.css";
import logo from '../images/logo.png';


function Cart(){
    return(
        <div>
            <div className="cart_banner_section">
                <div>
                <img alt="" className="cart_logo" src={logo} /> <br />
                <span className="cart_title">Cart</span>
                </div>
            </div>
            <Certification/>
        </div>
    );
}
export default Cart;