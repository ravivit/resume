// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = ({ cart, onCheckout }) => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
      alert("Please fill in all card details.");
      return;
    }
    onCheckout(customer);
  };

  return (
    <div className="checkout container">
      <h2 className="text-center my-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <h3>Customer Details</h3>
        <input
          type="text"
          placeholder="Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          className="form-control mb-3"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          className="form-control mb-3"
          required
        />

        <h3>Card Details</h3>
        <input
          type="text"
          placeholder="Card Number"
          value={cardDetails.cardNumber}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, cardNumber: e.target.value })
          }
          className="form-control mb-3"
          required
        />
        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={cardDetails.expiry}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, expiry: e.target.value })
          }
          className="form-control mb-3"
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, cvv: e.target.value })
          }
          className="form-control mb-3"
          required
        />

        <button type="submit" className="btn btn-success">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;