import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  //   const expenceDate = new Date(2021, 11, 23);
  //   const expenceTitle = "Car Insurance";
  //   const expenceAmount = 294.67;

  const [title, setTitle] = useState(props.title);
  console.log("Expence Items Loaded");

  const titleHandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={titleHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
