import React from 'react'
import { Link } from "react-router-dom";
import Logo from '/logo22.png'
export default function footer() {
    return (
        <>
            <section className='footer-section'>


                <div className="footer-container">



                    <div className="footer-box">
                        <div className="footer-item  footer-big">


                            <Link to="/">
                                <div className="logo-box">
                                    <img src={Logo} alt="logo" /><h3>sri mahalakshmi Metals</h3>
                                </div>
                            </Link>

                            <p>Your trusted destination for exquisite brass idols and authentic pooja essentials. Crafting spiritual excellence since generations.</p>
                            <h5><a href="tel:+918637446196"><i className="fa fa-phone"></i>+918637446196</a></h5>
                            <h5><a href="mailto:Prabhakaran12257@gmail.com"><i className="fa fa-envelope-o"></i>Prabhakaran12257@gmail.com </a></h5>


                        </div>

                        <div className="footer-item">

                            <li id='footer-title'>Quick links</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Aboutus">about us</Link></li>
                            <li><Link to="/collection">collections</Link></li>
                            <li><Link to="/#contact-us">contact</Link></li>


                        </div>
                        <div className="footer-item footer-last" >
                            <li id='footer-title'>our collection</li>
                            <li><Link to="/AllProduct">gold idols</Link></li>
                            <li><Link to="/collection">pooja items</Link></li>
                            <li><Link to="/AllProduct">brass latest collection</Link></li>
                            <li><Link to="/AllProduct">divine latest collection</Link></li>
                            <li><Link to="/collection">brass new arrivals</Link></li>

                        </div>

                    </div>



                    <div className="footer-box2">

                        <div className="social-media">

                            <span><a href="#"><i className="fa fa-facebook-f"></i></a></span>
                            <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                            <span><a href="#"><i className="fa fa-linkedin"></i></a></span>

                        </div>

                        <div className="copy-right">
                            <p>© 2026 <a href="https://www.instagram.com/sparkmarketing25?igsh=MTB4aGpyb3B5MTYwcw=="><span>spark marketing</span></a>. All rights reserved</p>
                        </div>
                    </div>


                </div>










            </section>


        </>
    )
}
