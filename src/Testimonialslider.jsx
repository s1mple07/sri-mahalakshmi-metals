import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Testimonialslider() {
    const sliderRef = useRef(null);
    const indexRef = useRef(0);
    const startX = useRef(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    const slides = [
        { profile: "./t1.png"      , star: "★ ★ ★ ★ ☆", profile_name: "ram"    ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile1.jpg", star: "★ ★ ★ ★ ☆", profile_name: "kd"     ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile2.jpg", star: "★ ★ ★ ★ ☆", profile_name: "sakthi" ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile3.jpg", star: "★ ★ ★ ★ ☆", profile_name: "ravi"   ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile1.jpg", star: "★ ★ ★ ★ ☆", profile_name: "srini"  ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile2.jpg", star: "★ ★ ★ ★ ☆", profile_name: "guhan"  ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
        { profile: "./profile3.jpg", star: "★ ★ ★ ★ ☆", profile_name: "vijay"  ,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus amet, nesciunt impedit vel quo. Inventore nostrum fuga, perspiciatis adipisci ipsa, rem quas illum et, aliquid deserunt expedita veniam?"},
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
