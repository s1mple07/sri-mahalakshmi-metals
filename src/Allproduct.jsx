import { Link } from "react-router-dom";
import Productdetail from "./Productdetail";
import Navmenu from "./Navmenu";
import Footer from "./Footer-section";
import { useEffect, useRef, useState, useMemo } from "react";

export default function Allproduct() {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // ✅ ALL products
  const allProducts = useMemo(() => {
    return Productdetail;
  }, []);


  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  

  return (
    <>
      <Navmenu />

      <section
        ref={containerRef}
        className={`allproduct-section fade-slide ${
          show ? "show" : ""
        }`}
      >
        <h3>sri mahalakshmi metals Products</h3>

        <div  ref={ref} className={`product-grid ${show ? "show" : ""}`}>
          {allProducts.map((item) => (
            <Link to={`/product/${item.slug}`} key={item.slug}>
              <div className="product-item">
                <div className="img-box">
                  {item.images?.[0] && (
                    <img src={item.images[0]} alt={item.name} />
                  )}
                </div>
                <h4>{item.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
