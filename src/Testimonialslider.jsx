import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Testimonialslider() {
    const sliderRef = useRef(null);
    const indexRef = useRef(0);
    const startX = useRef(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    const slides = [
        { profile: "./t1.png"      , star: "★ ★ ★ ★ ☆", profile_name: "ram"    ,review:"“The craftsmanship and detailing of the idols are truly exceptional. The quality of the metal and finishing exceeded our expectations. Highly recommended for temple installations.”"},
        { profile: "./profile1.jpg", star: "★ ★ ★ ★ ☆", profile_name: "kd"     ,review:"“We ordered a customized deity statue for our temple renovation, and the work was delivered with perfect traditional detailing. The dedication and precision are clearly visible.”"},
        { profile: "./profile2.jpg", star: "★ ★ ★ ★ ☆", profile_name: "sakthi" ,review:"“The idols bring a powerful spiritual presence to our pooja room. The quality, durability, and finishing are excellent. Very satisfied with the purchase.”"},
        { profile: "./profile3.jpg", star: "★ ★ ★ ★ ☆", profile_name: "ravi"   ,review:"“The ornamental crowns and Thiruvachi frames are beautifully crafted. They enhanced the grandeur of our temple festival decoration.”"},
        { profile: "./profile1.jpg", star: "★ ★ ★ ★ ☆", profile_name: "srini"  ,review:"“Professional service, timely delivery, and authentic traditional craftsmanship. We will definitely recommend them for bulk temple orders.”"},
        { profile: "./profile2.jpg", star: "★ ★ ★ ★ ☆", profile_name: "guhan"  ,review:"“The idol we received was beautifully crafted with fine traditional detailing. It truly enhanced the spiritual atmosphere of our temple.”"},
        { profile: "./profile3.jpg", star: "★ ★ ★ ★ ☆", profile_name: "vijay"  ,review:"“Highly reliable for bulk temple orders. Timely delivery and excellent craftsmanship make them our trusted choice.”"},
    ];

       useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else setSlidesPerView(3);

      indexRef.current = 0;
      sliderRef.current.style.transform = "translateX(0px)";
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = slides.length - slidesPerView;

  /* ---------- Move Slide (PIXEL BASED) ---------- */
  const moveSlide = (i) => {
    const slideWidth = sliderRef.current.children[0].offsetWidth;

    if (i < 0) i = maxIndex;
    if (i > maxIndex) i = 0;

    indexRef.current = i;
    sliderRef.current.style.transform = `translateX(-${i * slideWidth}px)`;
  };
    // Touch swipe
    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        const diff = startX.current - e.changedTouches[0].clientX;
        if (diff > 50) moveSlide(indexRef.current + 1);
        if (diff < -50) moveSlide(indexRef.current - 1);
    };

    return (
        <div
            className="testimonial-container"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="test-track" ref={sliderRef}>
                {slides.map((slide, i) => (
                    <Link to={slide.link} key={i} className="testimonial">
                        <div className="testimonial-item">
                            <div className="stat-box">
                               {slide.star}
                            </div>

                            <p>{slide.review}</p>
                            <div className="profile-img">
                                <img src={slide.profile} alt="profile-photo" />
                            </div>
                            <h4>{slide.profile_name}</h4>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Arrows */}
            <button className="arrow left" onClick={() => moveSlide(indexRef.current - 1)}>
                ❮
            </button>
            <button className="arrow right" onClick={() => moveSlide(indexRef.current + 1)}>
                ❯
            </button>
        </div>);
}
