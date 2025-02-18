// src/App.js
import React, { useState, useEffect } from "react";
import WorkshopList from "./components/WorkshopList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Receipt from "./components/Receipt";
import Analytics from "./components/Analytics";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const [transactions, setTransactions] = useState(() => {
    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Save transactions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addToCart = (workshop) => {
    if (!cart.some((item) => item.id === workshop.id)) {
      setCart([...cart, workshop]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const onCheckout = (customer) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const newTransaction = { customer, cart, total };
    setTransaction(newTransaction);
    setTransactions([...transactions, newTransaction]);
    setCart([]); // Clear the cart after checkout
  };

  const goBackToWorkshopList = () => {
    setTransaction(null); // Go back to the workshop list
  };

  return (
    <div className="container mt-4">

      {/* Main Content */}
      {!transaction ? (
        <>
          <WorkshopList addToCart={addToCart} cart={cart} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
          {cart.length > 0 && <Checkout cart={cart} onCheckout={onCheckout} />}
        </>
      ) : (
        <>
          <Receipt transaction={transaction} />
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={goBackToWorkshopList}
            >
              Go Back to Workshop List
            </button>
          </div>
        </>
      )}

      {/* Analytics */}
      <Analytics transactions={transactions} />
    </div>
  );
};

export default App;