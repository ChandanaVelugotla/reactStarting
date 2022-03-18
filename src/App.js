// import ExpenseItem from "./Components/ExpenseItem";
import { useState } from "react/cjs/react.development";
import Expences from "./Components/Expenses/Expenses";
import NewExpence from "./Components/NewExpences/NewExpences";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    date: new Date(2023, 11, 15),
    price: 294.67,
    id: "e1",
  },
  {
    title: "Bike Insurance",
    date: new Date(2021, 5, 4),
    price: 46.79,
    id: "e2",
  },
  { title: "Belenciaga", date: new Date(2022, 3, 14), price: 467.59, id: "e3" },
  {
    title: "Karl Lagerfield",
    date: new Date(2022, 11, 3),
    price: 89,
    id: "e4",
  },
];

function App() {
  const [expences, setExpences] = useState(DUMMY_EXPENSES);

  const AddExpenseData = (addedExpenseData) => {
    // console.log("App.JS");
    // console.log(addedExpenseData);
    setExpences((prevExpenses) => [addedExpenseData, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpence onNewExpenseData={AddExpenseData} />
      {/* <p>This is also visible</p> */}
      <Expences data={expences} />
    </div>
  );
}

export default App;
