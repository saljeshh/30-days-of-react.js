import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { useState } from "react";
import Result from "./components/Result/Result";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const data = [];
  if (userInput) {
    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      data.push({
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form formChangeHandler={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investment calculated yet</p>
      )}
      {userInput && (
        <Result data={data} initialInvestment={+userInput["currentSaving"]} />
      )}
    </div>
  );
}

export default App;
