import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
import styled from "styled-components";

// const FormControl = styled.div`
//   /* Here basic concept is
//     the styled is the object and we assign it a div function that is type of div,
//     it can be section, p any tag
//     now the css written inside is same as normal css but without the selectors and tags
//     - & is same as sass, we say it is of parent i.e div and inide there is element
//   */
//   margin: 0.5rem 0;

//   & label {
//     color: ${(props) => (props.invalid ? "red" : "black")};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* here we can accept props from the tags inside styled components */
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   @media (min-width: 768px) {
//     margin: auto;
//   }

//   /* we can omit these below as we have implemented in the above props.. line 20 */

//   /* &.invalid input {
//     background-color: red;
//     background: #ffd7d7;
//   }

//   &.invalid label {
//     color: red;
//   } */
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      return;
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // <form onSubmit={formSubmitHandler}>
    //   {/* <FormControl className={!isValid && "invalid"}> */}
    //   <FormControl invalid={!isValid}>
    //     <label invalid={!isValid}>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label invalid={!isValid}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
