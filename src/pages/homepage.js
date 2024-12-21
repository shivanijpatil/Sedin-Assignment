import "../styles/homepage.css";
import { Link } from "react-router-dom";
import dining from "../images/Home/Dining.png";
import bedroom from "../images/Home/Bedroom.png";
import living from "../images/Home/Living.png";

import Syltherine from "../images/Home/Syltherine.svg";
import Leviosa from "../images/Home/Leviosa.svg";
import Lolito from "../images/Home/Lolito.svg";
import Respira from "../images/Home/Respira.svg";
import Grifo from "../images/Home/Grifo.svg";
import Muggo from "../images/Home/Muggo.svg";
import Pingky from "../images/Home/Pingky.svg";
import Potty from "../images/Home/Potty.svg";

import ShareIcon from '../images/icons/Share.svg';
import CompareIcon from '../images/icons/Compare.svg';
import LikeIcon from '../images/icons/Heart.svg';

import room1 from '../images/Home/room1.svg';
import room2 from '../images/Home/room2.svg';



function HomePage() {
    const products = [
        { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%", image: Syltherine },
        { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: Leviosa },
        { id: 3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%", image: Lolito },
        { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", badge: "New", image: Respira },
        { id: 5, name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: Grifo },
        { id: 6, name: "Muggo", description: "Small mug", price: "Rp 150.000", badge: "New", image: Muggo },
        { id: 7, name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%", image: Pingky },
        { id: 8, name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", badge: "New", image: Potty },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="banner_img">
                <div className="hero_box">
                    <div className="sub_hero_box">
                        <span>New Arrival</span> <br />
                        <span className="sub_hero_box_main_text">
                            Discover Our <br /> New Collection
                        </span>
                        <br />
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </span>
                        <div className="sub_hero_box_button">
                            <Link to="/">buy now</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Browse the Range Section */}
            <div className="browse_range_div">
                <span className="browse_range_div_name">browse the range</span>
                <span className="browse_range_div_sentence">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>

                <div className="browse_range_div_main_card">
                    <div className="browse_range_div_card">
                        <img alt="" className="browse_range_div_card" src={dining} />
                        <span className="browse_range_div_card_name">dining</span>
                    </div>
                    <div className="browse_range_div_card">
                        <img alt="" className="browse_range_div_card" src={living} />
                        <span className="browse_range_div_card_name">living</span>
                    </div>
                    <div className="browse_range_div_card">
                        <img alt="" className="browse_range_div_card" src={bedroom} />
                        <span className="browse_range_div_card_name">bedroom</span>
                    </div>
                </div>
            </div>

            {/* Product Grid Section */}
            <div className="gallery_div">
                <h2 className="product-grid-heading">Our Products</h2>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-card ${index === 1 ? "highlight-card" : ""}`}
                        >
                            <div className="image-container">
                                <img src={product.image} alt={product.name} />
                                {product.discount && (
                                    <span className="discount-badge">{product.discount}</span>
                                )}
                                {product.badge && (
                                    <span className="new-badge">{product.badge}</span>
                                )}
                                {index === 1 && (
                                    <div className="overlay">
                                        <button className="add-to-cart">Add to cart</button>
                                        <div className="actions">
                                            <div className="action-item">
                                                <img src={ShareIcon} alt="Share" />
                                                <span>Share</span>
                                            </div>
                                            <div className="action-item">
                                                <img src={CompareIcon} alt="Compare" />
                                                <span>Compare</span>
                                            </div>
                                            <div className="action-item">
                                                <img src={LikeIcon} alt="Like" />
                                                <span>Like</span>
                                            </div>
                                        </div>
                                    </div>



                                )}
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className="price">
                                    {product.price}{" "}
                                    {product.oldPrice && (
                                        <span className="old-price">{product.oldPrice}</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className="show-more">Show More</button>
                </div>
                <div className="room-inspiration-container">
                    <div className="text-content">
                        <h1>50+ Beautiful rooms inspiration</h1>
                        <p>
                            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                        </p>
                        <button className="explore-button">Explore More</button>
                    </div>
                    <div className="carousel">
                        <div className="carousel-item">
                            <img src={room1} alt="Room 1" />

                        </div>
                        <div className="carousel-item">
                            <img src={room2} alt="Room 2" />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default HomePage;
