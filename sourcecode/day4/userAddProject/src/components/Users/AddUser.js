import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userFormSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age > 0",
      });
      return;
    }

    onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onError={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userFormSubmitHandler}>
          <div className={classes["form-group"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={userName}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="age">Age(Years)</label>
            <input type="number" value={age} onChange={ageChangeHandler} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
