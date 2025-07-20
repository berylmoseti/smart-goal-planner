import React, { useState } from "react";

function AddGoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      id: crypto.randomUUID(), // Generate unique ID
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0]
    };
    onAdd(newGoal);
    setFormData({
      name: "",
      targetAmount: "",
      category: "",
      deadline: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h3>Add a New Goal</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal name"
        required
      />
      <input
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        placeholder="Target amount"
        type="number"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        type="date"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
