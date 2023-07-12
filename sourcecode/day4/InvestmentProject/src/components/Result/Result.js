import React from "react";
import classes from "./Result.module.css";

const Result = ({ data, initialInvestment }) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "NPR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>
              {formatter.format(
                data.savingsEndOfYear -
                  initialInvestment -
                  data.yearlyContribution * data.year
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + data.yearlyContribution * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
