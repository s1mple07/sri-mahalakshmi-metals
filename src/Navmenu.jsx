import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import Logo from '/logo22.png'
import { useState, useEffect } from "react";
export default function Navmenu() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "light";
    });

    useEffect(() => {
        if (darkMode) {
            // light MODE
            document.body.style.backgroundColor = "#FFF7ED";
            document.body.style.color = "#6B7280";
            localStorage.setItem("theme", "light");
            
        } else {
            // Dark MODE
            document.body.style.backgroundColor = "#1F1F1F";
            document.body.style.color = "#F5F5F5";
            localStorage.setItem("theme", "dark");
        }
    }, [darkMode]);


    return (
        <>
            <div className="nav-section">
                <nav className='nav'>
                    <div className="logo-box">
                        <Link to="/"><img src={Logo} alt="logo" /></Link>
                    </div>

                    <ul className='nav-list' id='normal-link'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Aboutus">About Us</Link></li>
                        <li><Link to="/#contact-us">Contact Us</Link></li>
                        <li className="dropdown"><Link to="/" className="dropbtn">God Idols <i className="fa fa-angle-down"></i></Link>
                            <ul className="dropdown-menu " id='dropmenu-menu'>
                                <li><Link to="/">mahalaksmi-metal</Link></li>
                                <li><Link to="/">Development</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/collection">Pooja Items</Link></li>
                    </ul>


                    <div className="nav-last" id="normal-last-box">

                        <div className="nav-toggle-switch">
                            <label className="nav-switch-label">
                                <input type="checkbox" className="nav-checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
                                <span className="nav-slider"></span>
                            </label>
                        </div>


                        <a href="mailto:Prabhakaran12257@gmail.com">
                            <button className="button1">
                                <span>  Contact <i className="fa fa-envelope"></i>
                                </span>
                            </button>
                        </a>








                    </div>


                    <div className="nav-burger">

                        {/* <!-- Hidden Checkbox --> */}
                        <input type="checkbox" id="menu-toggle" />

                        {/* <!-- Hamburger Button --> */}
                        <label htmlFor="menu-toggle" className="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        {/* <!-- Links --> */}
                        <div className="link2">

                            {/* <!-- CLOSE BUTTON INSIDE MENU --> */}
                            <li className="close-btn"><label htmlFor="menu-toggle"><i className="fa fa-remove"></i></label></li>



                            <ul className='nav-list'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Aboutus">About Us</Link></li>
                                <li><Link to="/#contact-us">Contact Us</Link></li>
                                <li className="dropdown"><Link to="/" className="dropbtn">God Idols <i className="fa fa-angle-down"></i></Link>
                                    <ul className="dropdown-menu " id='dropmenu-menu'>
                                        <li><Link to="/">mahalaksmi-metal</Link></li>
                                        <li><Link to="/">Development</Link></li>
                                        <li><Link to="/">SEO</Link></li>
                                        <li><Link to="/">SEO</Link></li>
                                        <li><Link to="/">SEO</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/collection">Pooja Items</Link></li>
                            </ul>


                            <div className="nav-last">

                                <div className="nav-toggle-switch">
                                    <label className="nav-switch-label">
                                        <input type="checkbox" className="nav-checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
                                        <span className="nav-slider"></span>
                                    </label>
                                </div>


                                <a href="mailto:Prabhakaran12257@gmail.com">
                                    <button className="button1">
                                        <span>  Contact <i className="fa fa-envelope"></i>
                                        </span>
                                    </button>
                                </a>







                            </div>









                        </div>

                    </div>



                </nav>
            </div>
        </>
    )
}
