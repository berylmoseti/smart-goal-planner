import React, { useEffect, useState } from "react";
import {
  fetchGoals,
  addGoal,
  updateGoal,
  deleteGoal
} from "./api";

import AddGoalForm from "./components/AddGoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then((data) => setGoals(data));
  }, []);

  // CREATE: Add new goal
  const handleAddGoal = (newGoal) => {
    addGoal(newGoal).then((savedGoal) =>
      setGoals((prevGoals) => [...prevGoals, savedGoal])
    );
  };

  // UPDATE: Update an existing goal
  const handleUpdateGoal = (id, updates) => {
    updateGoal(id, updates).then((updatedGoal) =>
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.id === id ? updatedGoal : goal
        )
      )
    );
  };

  // DELETE: Remove goal
  const handleDeleteGoal = (id) => {
    deleteGoal(id).then(() =>
      setGoals((prevGoals) =>
        prevGoals.filter((goal) => goal.id !== id)
      )
    );
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>🎯 SMART GOAL PLANNER</h1>
      <Overview goals={goals} />
      <AddGoalForm onAdd={handleAddGoal} />
      <GoalList
        goals={goals}
        onUpdate={handleUpdateGoal}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
}

export default App;
