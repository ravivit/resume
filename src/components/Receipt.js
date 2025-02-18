// src/components/Receipt.js
import React from "react";

const Receipt = ({ transaction }) => {
  return (
    <div className="receipt container">
      <h2 className="text-center my-4">Thank you for your purchase! 🎉</h2>
      <div className="card p-4 shadow">
      <div className="d-flex align-items-center justify-content-center mb-4">
        <img
          src="/images/logo.png"
          alt="EduConnect-TechGenius Logo"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <h3 className="m-0">EduConnect-TechGenius Workshop</h3>
      </div>
        <h3 className="text-center mb-4">Order Receipt</h3>
        <div className="row mb-4">
          <div className="col-md-6">
            <h5>Customer Details</h5>
            <p><strong>Name:</strong> {transaction.customer.name}</p>
            <p><strong>Email:</strong> {transaction.customer.email}</p>
            <p><strong>Phone:</strong> {transaction.customer.phone}</p>
          </div>
          <div className="col-md-6">
            <h5>Order Summary</h5>
            <ul className="list-group">
              {transaction.cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span>₹{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-end">
          <h4>
            <strong>Total:</strong> ₹{transaction.total}
          </h4>
        </div>
        <div className="text-center mt-4">
          <p className="text-muted">
          Payment successful! Now, let's connect, innovate, and excel together at the workshop. See you at the workshop!
          </p>

        </div>
      </div>
    </div>
  );
};

export default Receipt;