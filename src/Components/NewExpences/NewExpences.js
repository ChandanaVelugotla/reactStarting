import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenceForm from "./ExpenceForm";
import "./NewExpences.css";

const NewExpence = (props) => {
  const AddExpenceData = (enteredExpenceData) => {
    const expenceData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };

    // console.log(expenceData);
    props.onNewExpenseData(expenceData);
  };

  const [showForm, setShowForm] = useState(false);

  const ShowsForm = () => {
    setShowForm(true);
  };

  const HideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenceForm onSubmitExpenceData={AddExpenceData} hide={HideForm} />
      ) : (
        <button onClick={ShowsForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpence;
