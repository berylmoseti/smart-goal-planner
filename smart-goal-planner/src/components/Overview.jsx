import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  const today = new Date();

  const getDeadlineStatus = (goal) => {
    const deadline = new Date(goal.deadline);
    const timeDiff = deadline - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (goal.savedAmount >= goal.targetAmount) return " Completed";
    if (daysLeft < 0) return " Overdue";
    if (daysLeft <= 30) return ` ${daysLeft} days left`;
    return `${daysLeft} days left`;
  };

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <h2>📊 Overview</h2>
      <p><strong>Total Goals:</strong> {totalGoals}</p>
      <p><strong>Total Saved:</strong> ${totalSaved}</p>
      <p><strong>Goals Completed:</strong> {completedGoals}</p>

      <h4 style={{ marginTop: "1.5rem" }}> Deadlines</h4>
      {goals.map(goal => (
        <div key={goal.id}>
          <p>
            <strong>{goal.name}:</strong> {getDeadlineStatus(goal)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Overview;
