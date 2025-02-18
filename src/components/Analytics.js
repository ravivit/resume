// src/components/Analytics.js
import React from "react";

const Analytics = ({ transactions }) => {
  // Calculate total revenue and number of products sold
  const totalRevenue = transactions.reduce((sum, txn) => sum + txn.total, 0);
  const totalProductsSold = transactions.reduce(
    (sum, txn) => sum + txn.cart.length,
    0
  );

  // Calculate the number of times each product was sold
  const productSales = {};
  transactions.forEach((txn) => {
    txn.cart.forEach((item) => {
      if (productSales[item.title]) {
        productSales[item.title] += 1;
      } else {
        productSales[item.title] = 1;
      }
    });
  });

  return (
    <div className="analytics container mt-4">
      <h2 className="text-center mb-4">Analytics</h2>
      <div className="card p-4 shadow">
        <h4>Product Sales</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity Sold</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(productSales).map(([product, quantity]) => (
              <tr key={product}>
                <td>{product}</td>
                <td>{quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="mt-4">Total Revenue: ₹{totalRevenue}</h4>
        <h4>Total Products Sold: {totalProductsSold}</h4>
      </div>
    </div>
  );
};

export default Analytics;