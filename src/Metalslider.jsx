import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Metalslider() {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  const startX = useRef(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const slides = [
    { img: "./Brass-Product/Brass Product - 02.png",tag:"best seller", link: "/product/narasimha", item_name: "narasimha" },
    { img: "./Brass-Product/Brass Product - 04.png",tag:"limited", link: "/product/maha lakshmi amman", item_name: "maha lakshmi amman" },
    { img: "./Product Image/Product image -02.png",tag:"best seller", link: "/product/vinayagar", item_name: "vinayagar" },
    { img: "./Product Image/Product image -03.png", link: "/product/hanuman", item_name: "hanuman" },
    { img: "./Product Image/Product image -04.png",tag:"best seller", link: "/product/KALASAM", item_name: "KALASAM" },
    { img: "./Product Image/Product image -01.png",tag:"best seller", link: "/product/brass", item_name: "DHANVANTARI" },
    { img: "./Brass-Product/Brass Product - 01.png",tag:"best seller", link: "/product/murugan", item_name: "murugan" },
    { img: "./Brass-Product/Brass Product - 03.png",tag:"best seller", link: "/product/krishna", item_name: "krishna" },
  ];

  // Responsive slidesPerView
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 480) setSlidesPerView(1);
      else if (window.innerWidth < 768) setSlidesPerView(2);
      else if (window.innerWidth < 1024) setSlidesPerView(3);
      else setSlidesPerView(4);

      indexRef.current = 0;
      sliderRef.current.style.transform = "translateX(0px)";
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = slides.length - slidesPerView;

  const moveSlide = (i) => {
    const slideWidth = sliderRef.current.children[0].offsetWidth;

    if (i > maxIndex) i = 0;
    if (i < 0) i = maxIndex;

    indexRef.current = i;
    sliderRef.current.style.transform = `translateX(-${i * slideWidth}px)`;
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(indexRef.current + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  // Touch swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) moveSlide(indexRef.current + 1);
    if (diff < -50) moveSlide(indexRef.current - 1);
  };
  

  return (
    <div className="slider-container" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="slider-track" ref={sliderRef}>
        {slides.map((slide, i) => (
          <Link to={slide.link} key={i} className="slide">
            <div className="product-item">
              {slide.tag && <span className="tag">{slide.tag}</span>}
              <div className="img-box">
                <img src={slide.img} alt="metal" />
              </div>
              <h4>{slide.item_name}</h4>
            </div>
          </Link>
        ))}
      </div>

      <button className="arrow left" onClick={() => moveSlide(indexRef.current - 1)}>❮</button>
      <button className="arrow right" onClick={() => moveSlide(indexRef.current + 1)}>❯</button>
    </div>
  );
}
