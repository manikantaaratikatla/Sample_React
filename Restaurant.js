import React, { useEffect, useState } from "react";

const Restaurant = ({ url }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        try {
          const cards = data?.data?.cards || [];

          const regularCards =
            cards
              .find(card => card.groupedCard)
              ?.groupedCard
              ?.cardGroupMap
              ?.REGULAR
              ?.cards || [];

          let allItemCards = [];

          regularCards.forEach(cardWrapper => {
            const card = cardWrapper.card?.card;
            if (card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
              allItemCards = allItemCards.concat(card.itemCards || []);
            }
          });

          if (allItemCards.length === 0) {
            setError("Menu items not found");
            setLoading(false);
            return;
          }

          const items = allItemCards.map(item => {
            const info = item.card.info;
            return {
              id: info.id,
              name: info.name,
              price: info.price
                ? info.price / 100
                : info.defaultPrice
                ? info.defaultPrice / 100
                : "N/A",
              image: info.imageId
                ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`
                : "",
              rating: info.ratings?.aggregatedRating?.rating || "N/A",
            };
          });

          setMenuItems(items);
          setLoading(false);
        } catch (e) {
          console.error("Parsing error:", e);
          setError("Failed to parse menu items");
          setLoading(false);
        }
      })
      .catch(e => {
        console.error("Fetch error:", e);
        setError("Failed to fetch menu data");
        setLoading(false);
      });
  }, [url]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="items-container">
      {menuItems.map((item, index) => (
        <div key={`${item.id}-${index}`} className="item-card">
          <img src={item.image} alt={item.name} className="item-image" />
          <h3>{item.name}</h3>
          <p>Rating: {item.rating} ⭐</p>
          <p>Price: ₹{item.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
