import React from "react";

const UserManual = () => {
   const name = localStorage.getItem("name")
   const fname = name.split(" ");
   const Fname = fname[0];
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">📘 To-Do App User Manual</h1>

      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-2">👋 Welcome, {Fname}!</h2>
        <p>This app helps you manage your daily tasks efficiently. Here’s a quick guide to help you get started!</p>
      </div>

      {/* NEW: How to Add Task */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-pink-500">
        <h2 className="text-2xl font-semibold mb-2">➕ How to Add a Task</h2>
        <p>
          To create a new task, simply click the <span className="font-bold text-pink-600">‘+’ button</span> usually found at the top right or near your task sections.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Fill in the <strong>Task Title</strong>, <strong>Description</strong>, <strong>Date</strong>, and <strong>Time</strong>.</li>
          <li>You can also set a tag like <span className="text-red-600 font-medium">Important</span> or <span className="text-blue-600 font-medium">Study</span>.</li>
          <li>Press <span className="font-semibold">Save</span> to add it to your list.</li>
        </ul>
      </div>

      {/* Welcome */}


      {/* Sidebar */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-red-500">
        <h2 className="text-2xl font-semibold mb-2">📂 Sidebar Menu</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Dashboard:</strong> View overall stats and stopwatch.</li>
          <li><strong>Vital Task:</strong> View your high-priority tasks.</li>
          <li><strong>My Task:</strong> See all your tasks here.</li>
          <li><strong>In Progress:</strong> Tasks you’re currently working on.</li>
          <li><strong>Completed:</strong> Tasks you've finished.</li>
        </ul>
      </div>

      {/* Task Card */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
        <h2 className="text-2xl font-semibold mb-2">🧾 Task Cards</h2>
        <p>Each task card shows the following:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Time & Date</strong> of the task.</li>
          <li><strong>Title & Description</strong> of what to do.</li>
          <li><strong>Status Button:</strong> Start, Complete, or Delete task.</li>
          <li><strong>Priority Badge</strong> like "Important".</li>
        </ul>
      </div>

      {/* Stopwatch */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold mb-2">⏱ Stopwatch</h2>
        <p>Use the stopwatch to track your task time. Press Start, then Stop when you finish a task. Helps build focus!</p>
      </div>

      {/* Chart */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-indigo-500">
        <h2 className="text-2xl font-semibold mb-2">📊 Task Status Chart</h2>
        <p>The circular chart shows your progress:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><span className="text-red-600">Red:</span> Not Completed</li>
          <li><span className="text-blue-600">Blue:</span> In Progress</li>
          <li><span className="text-green-600">Green:</span> Completed</li>
        </ul>
      </div>

      {/* How to Use */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold mb-2">🛠 How to Use</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Click the ➕ button to add a task.</li>
          <li>Mark the task as Important if needed.</li>
          <li>Use the Stopwatch to track time.</li>
          <li>Click “Start” to begin working.</li>
          <li>Mark it as Completed when done!</li>
        </ol>
      </div>

      {/* Tips */}
      <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-2">💡 Tips</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Plan tasks the night before.</li>
          <li>Use the stopwatch daily to build consistency.</li>
          <li>Check your stats often for motivation.</li>
        </ul>
      </div>
    </div>
  );
};

export default UserManual;