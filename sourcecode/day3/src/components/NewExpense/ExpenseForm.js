import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // const [userInput, setUserInput] = useState({
  // //   enteredTitle: "",
  // //   enteredAmount: "",
  // //   enteredDate: "",
  // // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prev) => {
    //   return { ...prev, enteredTitle: event.target.value };
    // });

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "amount") {
  //     setEnteredAmount(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(data);

    console.log(data);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            // onChange={(event) => {
            //   inputChangeHandler("title", event.target.value);
            // }}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step={0.01}
            // onChange={(event) => {
            //   inputChangeHandler("amount", event.target.value);
            // }}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2028-12-31"
            value={enteredDate}
            // onChange={(event) => {
            //   inputChangeHandler("date", event.target.value);
            // }}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
