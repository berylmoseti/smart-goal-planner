import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>My Goals</h2>
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;
