import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = ({ formChangeHandler }) => {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingHandler = (event) => {
    setCurrentSaving(event.target.value);
  };

  const yearlyContributionHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      currentSaving,
      yearlyContribution,
      expectedReturn,
      duration,
    };
    formChangeHandler(data);
  };

  const resetHandler = (event) => {
    setCurrentSaving("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  return (
    <form className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSaving}
            onChange={currentSavingHandler}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlyContribution}
            onChange={yearlyContributionHandler}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedReturn}
            onChange={expectedReturnHandler}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={duration}
            onChange={durationHandler}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={submitHandler}
          className={classes.button}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
