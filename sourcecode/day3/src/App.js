import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 2000,
    date: new Date(2019, 5, 6),
  },
  {
    id: "e2",
    title: "Laptop Display",
    amount: 50500,
    date: new Date(2022, 8, 6),
  },
  {
    id: "e3",
    title: "Next js Data",
    amount: 1500,
    date: new Date(2021, 9, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onNewExpenseAdded = (data) => {
    setExpenses((prevExpense) => {
      return [data, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={onNewExpenseAdded} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
