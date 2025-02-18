// src/components/Cart.js
import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart container">
      <h2 className="text-center my-4">Your Cart</h2>
      {cart.length === 0 ? ( // Check if cart is empty
        <div className="text-center">
          <p className="text-muted">No items in Cart</p>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-center">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;