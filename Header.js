import React from "react";

const Header = () => {
  return (
    <header id="header" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6yS0DVo3PQwxRVWHaUJ9ejn6Dkgu0zcuA&s"  
        alt="Food Delivery Logo"
        style={{ height: "50px", borderRadius: "8px" }}
      />
      <h1>Food Delivery App</h1>
    </header>
  );
};

export default Header;
