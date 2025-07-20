import React from "react";

function GoalCard({ goal, onUpdate, onDelete }) {
  const {
    id,
    name,
    targetAmount,
    savedAmount,
    category,
    deadline
  } = goal;

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
