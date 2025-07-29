const BASE_URL = "http://localhost:4000/goals";


export const fetchGoals = () => {
  return fetch(BASE_URL).then((res) => res.json());
};


export const addGoal = (goal) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(goal)
  }).then((res) => res.json());
};


export const updateGoal = (id, updates) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  }).then((res) => res.json());
};


export const deleteGoal = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};
