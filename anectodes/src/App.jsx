import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(null);

  const handleClick = () => {
    const len = anecdotes.length;
    let randomNum = Math.floor(Math.random() * len);
    setSelected(randomNum);
  }
  const handleVote = () => {
    const arr = [...votes];
    if (arr[selected]) arr[selected] += 1;
    else arr[selected] = 1;
    setVotes(arr);
    MostVoted();
  }
  const MostVoted = () => {
    console.log("useEffect running");
    const tempVotes = [...votes];
    const maxVotes = tempVotes.reduce((max, current) => {
      if (current > max) return current;
      return max;
    }, tempVotes[0]);
    const mostVotedIndex = tempVotes.indexOf(maxVotes);
    console.log(mostVotedIndex);
    setMostVoted(mostVotedIndex);
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdotes</button>

      {(!isNaN(votes[mostVoted]) && votes[mostVoted] > 0) && (
        <div>
          <h1>Anectode with most votes</h1>
          <p>{anecdotes[mostVoted]}</p>
          <p>has {votes[mostVoted]} votes</p>
        </div>
      )}
    </div>
  )
}

export default App