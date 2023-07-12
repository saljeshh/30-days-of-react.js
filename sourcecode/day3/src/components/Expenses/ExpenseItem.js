import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// this is stateless/dumb/presentational component

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs.{amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
