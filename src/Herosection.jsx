import React from 'react'
import { useEffect, useRef, useState } from "react";
export default function Herosection() {

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
  <section
  ref={sectionRef}
  className={`hero-section ${isVisible ? "show" : ""}`}
>
  <div className={`hero-container ${isVisible ? "show" : ""}`}>
           <div className="hero-video">
              <video src="./b1.mov" className='video-bg' autoPlay  muted loop playsInline></video>
            </div>

           {/* <div className="hero-content">
               <h2>srimahalakshmisirpasala</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iste corporis explicabo voluptatibus fugit voluptatem praesentium incidunt. Dolorem laudantium labore quibusdam! Voluptatum architecto rerum a eveniet et voluptas culpa consequuntur!</p>
                 <button className='button2'> explore more</button>
           </div> */}



       </div>







    </section>
    
    
    
    
    
    </>
  )
}
