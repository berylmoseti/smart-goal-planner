Smart Goal Planner
A simple and interactive savings goals dashboard built with React. This app helps users set, track, and manage multiple financial goals — like a Travel Fund, Emergency Savings, or a New Phone — using CRUD functionality and visual progress tracking.

 Features
Add, update, and delete savings goals

Track savings progress for each goal

Make deposits and update progress visually

Visual goal progress bars

Warnings for upcoming deadlines

Overview of total goals, amount saved, and overdue/incomplete goals

 Tech Stack
Frontend: React (Vite or CRA)

Backend: json-server for fake REST API

Data Format: JSON (db.json)

 Getting Started
. Clone and install dependencies:
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
npm install

. Run the React App
npm start

. Run JSON Server
Make sure db.json is in the root directory. Then:
json-server --watch db.json --port 3001

Folder Structure

smart-goal-planner/
├── public/
├── src/
│   ├── components/
│   │   ├── GoalList.js
│   │   ├── GoalItem.js
│   │   ├── GoalForm.js
│   │   ├── DepositForm.js
│   │   └── Overview.js
│   ├── App.js
│   └── index.js
├── db.json
└── README.md
 Notes
Make sure React runs on port 3000 and json-server on port 3001.

Customize goal categories, deadlines, and targets as needed in the UI.

Author,
Beryl Nyambeki.
