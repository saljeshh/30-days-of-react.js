import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP Running!");

  // we are using useCallback to make sure
  // use memo in Button.js will be able to compare clickHanlder function
  // with its previous clickHanlder function .. as in js evertime
  // App() runs function is new created.. so to make sure it wont rerender
  // when the button components props and children doesnt change
  const clickHandler = useCallback(() => {
    // closures comes into play now.. when we make function inside useCallback
    /* We are telling react dont recreate the function which means allowToggle 
    value will be closed or stored by closure for the next time, incase the 
    real allowToggle value is lost, it has it to run the function .. so to remove
    this we use allowToggle in dependencies in useCallback to tell react that
    ok we want you to recreate function will new value of closure when allowToggle
    changes. */
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={clickHandler}>toggle</Button>
    </div>
  );
}

export default App;
