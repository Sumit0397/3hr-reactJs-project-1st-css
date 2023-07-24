import React, { useState } from "react";
import classes from "./OrderForm.module.css";

const OrderForm = ({ addToBill }) => {
  const [order, setOrder] = useState({
    orderId: "",
    price: "",
    dishName: "",
    tableNumber: "table1"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToBill(order);
    setOrder({
      orderId: "",
      price: "",
      dishName: "",
      tableNumber: "table1"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Choose Order Id:</label>
          <input
            type="number"
            name="orderId"
            value={order.orderId}
            onChange={handleChange}
            placeholder="Order ID"
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Choose Price:</label>
          <input
            type="number"
            name="price"
            value={order.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Choose Dish:</label>
          <input
            type="text"
            name="dishName"
            value={order.dishName}
            onChange={handleChange}
            placeholder="Dish Name"
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Choose Table:</label>
          <select
            name="tableNumber"
            value={order.tableNumber}
            onChange={handleChange}
          >
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
          </select>
        </div>
        <div className={classes["new-expense__actions"]}>
          <button type="submit">Add to Bill</button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
