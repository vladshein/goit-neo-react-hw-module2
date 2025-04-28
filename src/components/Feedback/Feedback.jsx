const Feedback = ({ state, total }) => {
  console.log("Feedback:", state.bad, state.good);
  return (
    <>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round((state.good / total) * 100)}%</p>
    </>
  );
};

export default Feedback;
