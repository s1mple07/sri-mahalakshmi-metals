import { useParams, Link } from "react-router-dom";
import Productdetail from "./Productdetail";
import Errorfound from "./Errorfound";
import { useMemo ,useEffect, useRef, useState} from "react";

export default function Recommendedproduct() {
    const { slug } = useParams();

    if (!slug) return null;

    const product = Productdetail.find(p => p.slug === slug);
    if (!product) return <Errorfound />;

    const recommendedProducts = useMemo(() => {
        return Productdetail
            .filter(p => p.slug !== slug)
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
    }, [slug]);


  const ref = useRef(null);
  const [show, setShow] = useState(false);

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

            <section className="Recommendedproduct-section">
                <h3>similar Products</h3>

                <div  ref={ref} className={`product-grid ${show ? "show" : ""}`}>
                    {recommendedProducts.map(item => (
                        <Link to={`/product/${item.slug}`}  key={item.slug} >   
                             <div  ref={ref} className={`product-item ${show ? "show" : ""}`}>

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
              
                <Link to="/AllProduct"><button className='button2 collection-btn' > explore more</button></Link>
            </section>
        </>
    );
}
