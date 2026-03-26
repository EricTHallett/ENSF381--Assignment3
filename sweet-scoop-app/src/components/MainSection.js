import { useEffect, useState } from "react";
import flavors from "../data/flavors";
import reviews from "../data/reviews";

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function MainSection() {
    const [featuredFlavors, setFeaturedFlavors] = useState([]);
    const [featuredReviews, setFeaturedReviews] = useState([]);

    useEffect(() => {
        const shuffledFlavors = shuffle(flavors);
        setFeaturedFlavors(shuffledFlavors.slice(0, 3));

        const shuffledReviews = shuffle(reviews);
        setFeaturedReviews(shuffledReviews.slice(0, 3));
    }, []);

    const renderStars = (rating) => {
        return "Rating: " + "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    return (
        <div className="main-section">
            <section>
                <h2>About Sweet Scoop</h2>
                <p>
                    At Sweet Scoop, we're committed to serving high-quality ice cream that's both familiar and distinctive. Each flavor is created with care to ensure a consistent and enjoyable experience for every customer.
                    We invite you to try something new. It's usually worth it.
                </p>
            </section>

            <section>
                <h2>Featured Flavors</h2>
                <div className="flavor-grid">
                    {featuredFlavors.map((flavor) => (
                        <div key={flavor.id} className="flavor-card">
                            <img src={flavor.image} alt={flavor.name} />
                            <h3>{flavor.name}</h3>
                            <p>{flavor.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Customer Reviews</h2>
                {featuredReviews.map((review, index) => (
                    <div key={index}>
                        <h4>{review.customerName}</h4>
                        <p>{review.review}</p>
                        <p>{renderStars(review.rating)}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default MainSection;