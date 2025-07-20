import React, { useState } from "react";
import "../App.css"; // Make sure this path is correct relative to your folder structure

function GoalCard({ goal, onUpdate, onDelete }) {
  const {
    id,
    name,
    targetAmount,
    savedAmount,
    category,
    deadline
  } = goal;

  const [deposit, setDeposit] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    const amount = parseFloat(deposit);
    if (!amount || amount <= 0) return;

    const updatedAmount = savedAmount + amount;
    onUpdate(id, { savedAmount: updatedAmount });
    setDeposit("");
  };

  const percentage = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);
  const remaining = targetAmount - savedAmount;

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Target:</strong> ${targetAmount.toLocaleString()}</p>
      <p><strong>Saved:</strong> ${savedAmount.toLocaleString()}</p>
      <p><strong>Remaining:</strong> ${remaining.toLocaleString()}</p>
      <p><strong>Deadline:</strong> {deadline}</p>

      <p><strong>{percentage}% Complete</strong></p>

      <form onSubmit={handleDeposit}>
        <input
          type="number"
          placeholder="Add deposit"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />
        <button type="submit">Deposit</button>
      </form>

      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default GoalCard;
