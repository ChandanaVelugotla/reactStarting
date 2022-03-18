import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  //   let renderItems = <p>No results are found</p>;

  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">Found no items</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
