import { useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Productdetail from "./Productdetail";
import Navmenu from "./Navmenu";
import Footer from './Footer-section'
import Errorfound from "./Errorfound";
import Recommendedproduct from "./Recommendedproduct";

export default function Productview() {

    const [show, setShow] = useState(false);
    const ref = useRef(null);

    const { slug } = useParams();
    const product = Productdetail.find(p => p.slug === slug);

    const [activeImage, setActiveImage] = useState("");

    useEffect(() => {
        if (product && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return <Errorfound />;
    }




    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setShow(true),
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>

            <Navmenu />


            <div ref={ref} className={`fade-slide ${show ? "show" : ""}`}>

                <div className="product-view">

                    <div className="product-image-box">
                        <div className="main-image">
                            {activeImage && (
                                <img src={activeImage} alt={product?.name || "Product"} />
                            )}
                            <a href="https://wa.me/918637446196?text=Hello%0AI%20need%20details"><img src="/whatsapp-icon.png" className="whatsapp-productlogo" alt="whatsapp-logo" /></a>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="thumbnail-list">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="thumbnail"
                                    className={activeImage === img ? "active" : ""}
                                    onClick={() => setActiveImage(img)}
                                />
                            ))}
                        </div>

                    </div>


                    <div className="product-content">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>

                        <h4>Product detail :</h4>
                        <ul>
                            <li><h5>height   :</h5>    <span>{product.height}</span></li>
                            <li><h5>length   :</h5>    <span>{product.length}</span></li>
                            <li><h5>width    :</h5>    <span>{product.width}</span></li>
                            <li><h5>weight   :</h5>    <span>{product.weight}</span></li>
                            <li><h5>material :</h5>    <span>{product.material}</span></li>
                            <li><h5>finishing:</h5>  <span>{product.finishing}</span> </li>
                        </ul>

                        <a href="https://wa.me/918637446196?text=Hello%0AI%20need%20details">
                            <div className="product-btn">
                                <button className="whatsapp-btn">
                                    <p>whatsapp enquiry</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                    </svg>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>



                <Recommendedproduct />
            </div>
            <Footer />
        </>
    )
}
