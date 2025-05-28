import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./style.css";

const App = () => {
  const RESTAURANT_MENU_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7332622&lng=83.3061117&restaurantId=1022642&catalog_qa=undefined&submitAction=ENTER";

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header />
      <Navbar />

      <main>
        {!showMenu && (
          <div
            style={{ cursor: "pointer", textAlign: "center", marginTop: 30 }}
            onClick={() => setShowMenu(true)}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6yS0DVo3PQwxRVWHaUJ9ejn6Dkgu0zcuA&s"
              alt="Restaurant"
              width="300"
              style={{ borderRadius: 10 }}
            />
            <h2>Click the image to view menu</h2>
          </div>
        )}

        {showMenu && <Restaurant url={RESTAURANT_MENU_URL} />}
      </main>

      <Footer />
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
