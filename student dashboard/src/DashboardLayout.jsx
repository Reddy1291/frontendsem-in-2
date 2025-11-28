import React, { useState } from "react";
import "./dashboard.css";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout-container">

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "active" : ""}`}>
        <h2 className="logo">Student</h2>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Assignments</li>
          <li>Results</li>
          <li>Profile</li>
        </ul>
      </aside>

      {/* MAIN */}
      <div className="main">
        <header className="taskbar">
          <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
          <div className="task-left">Welcome, Student</div>

          <div className="task-right">
            <input type="text" placeholder="Search..." />
            <button>Logout</button>
          </div>
        </header>

        {/* CONTENT */}
        <section className="content">
          <h1>Dashboard</h1>
          <p>Your courses, assignments, notifications and progress are displayed here.</p>

          <div className="cards">
            <div className="card">Courses: 5</div>
            <div className="card">Assignments: 2</div>
            <div className="card">Pending Tasks: 3</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardLayout;
