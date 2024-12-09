import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function setUserInput(indentifier, value) {
    setUserInputs((prev) => {
      return {
        ...prev,
        [indentifier]: +value,
      };
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput setUserInput={setUserInput} userInput={userInput}></UserInput>
      {userInput.duration < 1 && (
        <p id="result">Please enter a duration greater than 1</p>
      )}
      {userInput.duration >= 1 && <Result input={userInput}></Result>}
    </>
  );
}

export default App;
