import "./Expenses.css";
import Card from "../Ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expences = (props) => {
  const [selectionOfYear, setSelectionOfYear] = useState("2021");

  const YearHandler = (selectedYear) => {
    // console.log(selectedYear);
    setSelectionOfYear(selectedYear);
  };

  const filteredItems = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectionOfYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectYear={selectionOfYear}
          onSelectYear={YearHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpenseList list={filteredItems} />
      </Card>
    </div>
  );
};

export default Expences;
