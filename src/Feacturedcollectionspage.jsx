import Navmenu from './Navmenu'
import Footer from './Footer-section'
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Feacturedcollectionspage() {


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

    const collections = [
        {
            id: 1,
            title: "Lord Ganesha",
            description: "Remover of obstacles, symbol of wisdom and prosperity",
            image:
                "https://images.unsplash.com/photo-1760857067352-5fb8d6e9245f",
            category: "God Idols",
            path: "vinayagar",
        },
        {
            id: 2,
            title: "Goddess Lakshmi",
            description: "Goddess of wealth, fortune, and prosperity",
            image:
                "https://images.unsplash.com/photo-1622030254668-543c6d779833",
            category: "God Idols",
            path: "vinayagar",
        },
        {
            id: 3,
            title: "Lord Hanuman",
            description: "Symbol of strength, devotion, and courage",
            image:
                "https://images.unsplash.com/photo-1763475944771-702683b1b42c",
            category: "God Idols",
            path: "vinayagar",
        },
        {
            id: 4,
            title: "Brass Kalasam",
            description: "Sacred pot for rituals and ceremonies",
            image:
                "https://images.unsplash.com/photo-1755257116173-ff2269223971",
            category: "Pooja Items",
            path: "vinayagar",
        },
        {
            id: 5,
            title: "Temple Brass Items",
            description: "Authentic brass accessories for daily worship",
            image:
                "https://images.unsplash.com/photo-1674547541476-7f254bc2e463",
            category: "Pooja Items",
            path: "vinayagar",
        },
        {
            id: 6,
            title: "Temple Brass Items",
            description: "Authentic brass accessories for daily worship",
            image:
                "https://images.unsplash.com/photo-1674547541476-7f254bc2e463",
            category: "Pooja Items",
            path: "vinayagar",
        }, {
            id: 7,
            title: "Lord Ganesha",
            description: "Remover of obstacles, symbol of wisdom and prosperity",
            image:
                "https://images.unsplash.com/photo-1760857067352-5fb8d6e9245f",
            category: "God Idols",
            path: "vinayagar",
        },
        {
            id: 8,
            title: "Goddess Lakshmi",
            description: "Goddess of wealth, fortune, and prosperity",
            image:
                "https://images.unsplash.com/photo-1622030254668-543c6d779833",
            category: "God Idols",
            path: "vinayagar",
        },
        {
            id: 9,
            title: "Lord Hanuman",
            description: "Symbol of strength, devotion, and courage",
            image:
                "https://images.unsplash.com/photo-1763475944771-702683b1b42c",
            category: "God Idols",
            path: "vinayagar",
        },
    ];


    return (
        <>
            <Navmenu />



            <section
                ref={sectionRef}
                className={`collections-section ${isVisible ? "show" : ""}`}
            >
                <div className="start-container">
                    {/* Heading */}
                    <div className="feature-section">
                        <h3>Featured Collections</h3>
                        <p>
                            Discover our handpicked selection of divine brass idols and sacred
                            pooja essentials
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="collections-grid">
                        {collections.map((item, index) => (

                            <Link key={item.id} to={`/product/${item.path}`}>
                                <div
                                    key={item.id}
                                    className="collection-card"
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                >
                                    <div className="image-wrapper">
                                        <img src={item.image} alt={item.title} />
                                        <div className="overlay"></div>
                                        <span className="badge">{item.category}</span>
                                    </div>

                                    <div className="feature-section-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>


                   
                </div>
            </section>






            <Footer />
        </>
    )
}
