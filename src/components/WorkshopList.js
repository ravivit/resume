// src/components/WorkshopList.js
import React, { useState } from "react";
import { workshops } from "../data";

const WorkshopList = ({ addToCart, cart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workshop-list container">
              <div className="d-flex align-items-center justify-content-center mb-4">
        <img
          src="/images/logo.png"
          alt="EduConnect-TechGenius Logo"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <h1 className="m-0">EduConnect-TechGenius Workshop</h1>
      </div>
      <h2 className="text-center my-4">Available Workshops</h2>
      <input
        type="text"
        placeholder="Search workshops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />
      <div className="row">
        {filteredWorkshops.map((workshop) => {
          const isAdded = cart.some((item) => item.id === workshop.id); // Check if item is in cart
          return (
            <div key={workshop.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={workshop.image}
                  className="card-img-top"
                  alt={workshop.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{workshop.title}</h5>
                  <p className="card-text">{workshop.description}</p>
                  <p className="card-text">Price: ₹{workshop.price}</p>
                  <button
                    className={`btn ${isAdded ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => addToCart(workshop)}
                    disabled={isAdded} // Disable button if item is already in cart
                  >
                    {isAdded ? "Already Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopList;