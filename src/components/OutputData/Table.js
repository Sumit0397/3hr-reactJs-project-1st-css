import React from "react";
import classes from "./Table.module.css";

const Table = ({ orders, tableNumber, onDelete }) => {
  const tableOrders = orders.filter(
    (order) => order.tableNumber === tableNumber
  );

  return (
    <div className={classes.table}>
      <h2 className={classes.h2}>{tableNumber}</h2>
      <ul>
        {tableOrders.map((order, index) => (
          <li key={index}>
            Order ID: {order.orderId}, Dish Name: {order.dishName}, Price:{" "}
            {order.price}, Table No : {tableNumber}
            <button onClick={() => onDelete(order.orderId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
