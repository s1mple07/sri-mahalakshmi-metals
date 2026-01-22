import { useEffect, useRef, useState } from 'react'
export default function Collection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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
        },
        {
            id: 2,
            title: "Goddess Lakshmi",
            description: "Goddess of wealth, fortune, and prosperity",
            image:
                "https://images.unsplash.com/photo-1622030254668-543c6d779833",
            category: "God Idols",
        },
        {
            id: 3,
            title: "Lord Hanuman",
            description: "Symbol of strength, devotion, and courage",
            image:
                "https://images.unsplash.com/photo-1763475944771-702683b1b42c",
            category: "God Idols",
        },
        {
            id: 4,
            title: "Brass Kalasam",
            description: "Sacred pot for rituals and ceremonies",
            image:
                "https://images.unsplash.com/photo-1755257116173-ff2269223971",
            category: "Pooja Items",
        },
        {
            id: 5,
            title: "Temple Brass Items",
            description: "Authentic brass accessories for daily worship",
            image:
                "https://images.unsplash.com/photo-1674547541476-7f254bc2e463",
            category: "Pooja Items",
        },
        {
            id: 6,
            title: "Temple Brass Items",
            description: "Authentic brass accessories for daily worship",
            image:
                "https://images.unsplash.com/photo-1674547541476-7f254bc2e463",
            category: "Pooja Items",
        }
    ];








    return (
        <>
            <section ref={sectionRef} className={`begin-container ${isVisible ? "show" : ""}`}>

                <div className="collection-section">

                    <h3>Pooja Items</h3>



                    <div className="collection-item-container">


                        {collections.map((item, index) => (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={item.image} alt={item.image} />
                                        <img src="./whatsapp-icon.png" className="whatsapp-logo" alt="whatsapp-logo" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h3 className="back-title">{item.title}</h3>
                                        <p>{item.description}</p>

                                        <a href="https://wa.me/918637446196?text=Hello%0AI%20need%20details">
                                            <button className="whatapp-Btn">
                                                <span className="svgContainer">
                                                    <i className="fa fa-whatsapp"></i>
                                                </span>
                                                <span className="whatapp-Btn-BG"></span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>))}

                    </div>
                </div>


            </section>




        </>
    )
}
