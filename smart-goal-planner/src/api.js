const BASE_URL = "http://localhost:3001/goals";

// GET all goals
export const fetchGoals = () => {
  return fetch(BASE_URL).then((res) => res.json());
};

// POST a new goal
export const addGoal = (goal) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(goal)
  }).then((res) => res.json());
};

// PATCH (update part of a goal)
export const updateGoal = (id, updates) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  }).then((res) => res.json());
};

// DELETE a goal
export const deleteGoal = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};
