import React, { useState, useEffect } from "react";
import Table from "./components/OutputData/Table";
import OrderForm from "./components/InputForm/OrderForm";
import "./styles.css";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const savedOrders = JSON.parse(localStorage.getItem("allOrders")) || {};
    setOrders(Object.values(savedOrders));
  }, []);

  const addToBill = (order) => {
    // Retrieve existing orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem("allOrders")) || {};

    // Update the orders with the new order using orderId as the key
    const updatedOrders = {
      ...savedOrders,
      [order.orderId]: order
    };

    // Save updated orders back to localStorage
    localStorage.setItem("allOrders", JSON.stringify(updatedOrders));

    setOrders(Object.values(updatedOrders));
  };

  const deleteOrder = (orderId) => {
    // Retrieve existing orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem("allOrders")) || {};

    // Delete the order with the specified orderId
    delete savedOrders[orderId];

    // Save updated orders back to localStorage
    localStorage.setItem("allOrders", JSON.stringify(savedOrders));

    setOrders(Object.values(savedOrders));
  };

  return (
    <div>
      <div className="new-expense">
        <OrderForm addToBill={addToBill} />
      </div>
      <Table orders={orders} tableNumber="table1" onDelete={deleteOrder} />
      <Table orders={orders} tableNumber="table2" onDelete={deleteOrder} />
      <Table orders={orders} tableNumber="table3" onDelete={deleteOrder} />
    </div>
  );
};
export default App;
