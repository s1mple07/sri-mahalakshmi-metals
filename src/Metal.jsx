import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Metalslider from './Metalslider.jsx'

export default function Metal() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>

      <section className='container'>
        <div ref={sectionRef} className={`metal-section ${isVisible ? "show" : ""}`}>

          <h3>sri mahalakshmi metals</h3>

          <Metalslider />

          <Link to="/AllProduct"><button className='button2'> explore more</button></Link>
        </div>


      </section>

    </>
  )
}
