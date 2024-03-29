import { useState } from "react"
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);

  const handleGood=()=>{
    setGood(good+1);
    setTotalFeedbacks(totalFeedbacks+1);
  }

  const handleNeutral=()=>{
    setNeutral(neutral+1);
    setTotalFeedbacks(totalFeedbacks+1);
  }

  const handleBad=()=>{
    setBad(bad+1);
    setTotalFeedbacks(totalFeedbacks+1);
  }

  return (
    <div>
    <h1>Give Feedback</h1>
    <button onClick={handleGood}>
      good
    </button>
    <button onClick={handleNeutral}>
      neutral
    </button>
    <button onClick={handleBad}>
      bad
    </button>
    
    <Statistics good={good} bad={bad} neutral={neutral} totalFeedbacks={totalFeedbacks}/>
    </div>
  )
}

export default App
