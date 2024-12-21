import React, { useState } from "react";
import "../styles/ShopPage.css";
import "../styles/ShopPage.css";
import Certification from "./certification";
import filter from "../images/icons/filter.svg";
import grid from "../images/icons/grid.svg";
import list from "../images/icons/list.svg";
import Line from "../images/icons/Line.svg";
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

const products = [
    {
        id: 1,
        name: "Syltherine",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        img: Syltherine,
    },
    {
        id: 2,
        name: "Leviosa",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        img: Leviosa,
    },
    {
        id: 3,
        name: "Lolito",
        category: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        img: Lolito,
    },
    {
        id: 4,
        name: "Respira",
        category: "Outdoor bar table and stool",
        price: "Rp 500.000",
        tag: "New",
        img: Respira,
    },
    {
        id: 5,
        name: "Syltherine",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        img: Syltherine,
    },
    {
        id: 6,
        name: "Leviosa",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        img: Leviosa,
    },
    {
        id: 7,
        name: "Lolito",
        category: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        img: Lolito,
    },
    {
        id: 8,
        name: "Respira",
        category: "Outdoor bar table and stool",
        price: "Rp 500.000",
        tag: "New",
        img: Respira,
    },
    {
        id: 9,
        name: "Syltherine",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        img: Syltherine,
    },
    {
        id: 10,
        name: "Leviosa",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        img: Leviosa,
    },
    {
        id: 11,
        name: "Lolito",
        category: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        img: Lolito,
    },
    {
        id: 12,
        name: "Respira",
        category: "Outdoor bar table and stool",
        price: "Rp 500.000",
        tag: "New",
        img: Respira,
    },
    {
        id: 13,
        name: "Syltherine",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%",
        img: Syltherine,
    },
    {
        id: 14,
        name: "Leviosa",
        category: "Stylish cafe chair",
        price: "Rp 2.500.000",
        img: Leviosa,
    },
    {
        id: 15,
        name: "Lolito",
        category: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%",
        img: Lolito,
    },
    {
        id: 16,
        name: "Respira",
        category: "Outdoor bar table and stool",
        price: "Rp 500.000",
        tag: "New",
        img: Respira,
    },
];


function ShopHeader() {
    const [showCount, setShowCount] = useState(16);
    const [sortBy, setSortBy] = useState("Default");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const totalPages = Math.ceil(products.length / productsPerPage);
    const displayedProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };



    return (
        <div className="shop-header-container">
            {/* Background and Title */}
            <div className="shop-header"></div>

            {/* Filter and Sort Options */}
            <div className="filter-bar">
                {/* Filter and View Icons */}
                <div className="filter-options">
                    <div className="icon-text">
                        <img src={filter} alt="Filter Icon" className="icon" />
                        <span>Filter</span>
                    </div>
                    <img src={grid} alt="grid " className="icon" />
                    <img src={list} alt="list " className="icon" />
                    <img src={Line} alt="Line" className="icon" />
                </div>

                {/* Result Information */}
                <div className="result-info">Showing 1–{showCount} of 32 results</div>

                {/* Show and Sort Options */}
                <div className="settings">
                    <label htmlFor="show">Show</label>
                    <select
                        id="show"
                        value={showCount}
                        onChange={(e) => setShowCount(Number(e.target.value))}
                        className="dropdown"
                    >
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={32}>32</option>
                    </select>
                    <label htmlFor="sortBy">Sort by</label>
                    <select
                        id="sortBy"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="dropdown"
                    >
                        <option value="Default">Default</option>
                        <option value="Price">Price</option>
                        <option value="Popularity">Popularity</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="product-grid-container">
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-card ${index === 1 ? "highlight-card" : ""}`}
                        >
                            <div className="image-container">
                                <img src={product.img} alt={product.name} />
                                {product.discount && (
                                    <span className="discount-badge">{product.discount}</span>
                                )}
                                {product.tag && (
                                    <span className="new-badge">{product.tag}</span>
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
                                <p>{product.category}</p>
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


                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>

            <Certification />
        </div>
    );
}

export default ShopHeader;
