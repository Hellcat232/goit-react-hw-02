import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";

// import css from "./App.module.css";
const state = { good: 0, neutral: 0, bad: 0 };
const App = () => {
  const [feedback, setFeedback] = useState({ state });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />

      <Options onUpdate={updateFeedback} />
      <Feedback />
    </>
  );
};

export default App;
