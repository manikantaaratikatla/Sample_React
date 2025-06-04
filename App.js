import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./style.css";

const App = () => {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant One",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6yS0DVo3PQwxRVWHaUJ9ejn6Dkgu0zcuA&s",
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7332622&lng=83.3061117&restaurantId=1022642&catalog_qa=undefined&submitAction=ENTER",
    },
    {
      id: 2,
      name: "Restaurant Two",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.724159&lng=83.301277&restaurantId=1025480&catalog_qa=undefined&submitAction=ENTER",
    },
    {
      id: 3,
      name: "Restaurant Three",
      image:
        "https://picsum.photos/id/1035/600/400", // confirmed working image
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.736794&lng=83.307794&restaurantId=104102&catalog_qa=undefined&submitAction=ENTER",
    },
    {
      id: 4,
      name: "Restaurant Four",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7000&lng=83.3200&restaurantId=105304&catalog_qa=undefined&submitAction=ENTER",
    },
    {
      id: 5,
      name: "Restaurant Five",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7100&lng=83.3100&restaurantId=105500&catalog_qa=undefined&submitAction=ENTER",
    },
    {
      id: 6,
      name: "Restaurant Six",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      menuUrl:
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7200&lng=83.3050&restaurantId=105900&catalog_qa=undefined&submitAction=ENTER",
    },
  ];

  const [selectedRestaurantUrl, setSelectedRestaurantUrl] = useState(null);

  return (
    <>
      <Header />
      <Navbar />

      <main style={{ padding: "20px 40px", textAlign: "center" }}>
        {!selectedRestaurantUrl ? (
          <>
            <h2>Select a Restaurant</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "30px",
              }}
            >
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  style={{ cursor: "pointer", width: 300 }}
                  onClick={() => setSelectedRestaurantUrl(restaurant.menuUrl)}
                >
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{ width: "100%", borderRadius: 10 }}
                  />
                  <h3>{restaurant.name}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setSelectedRestaurantUrl(null)}
              style={{
                margin: "20px auto",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#f39c12",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              ← Back to Restaurants
            </button>

            <Restaurant url={selectedRestaurantUrl} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
