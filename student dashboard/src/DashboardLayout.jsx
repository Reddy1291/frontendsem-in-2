import React, { useState } from "react";
import "./dashboard.css";

export default function DashboardLayout() {
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

      {/* Main */}
      <div className="main">

        {/* Taskbar */}
        <header className="taskbar">
          <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>

          <div className="task-left">Welcome, Student</div>

          <div className="task-right">
            <input type="text" placeholder="Search..." />
            <button>Logout</button>
          </div>
        </header>

        {/* Content */}
        <section className="content">
          <h1>Dashboard</h1>
          <p>Your courses, assignments, notifications and progress are displayed here.</p>

          {/* Cards */}
          <div className="cards">
            <div className="card green">Courses: 5</div>
            <div className="card orange">Assignments: 2</div>
            <div className="card blue">Pending Tasks: 3</div>
          </div>

          {/* Assignments */}
          <h2 className="section-title">Assignments</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assignment</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>Unit–2 Problem Set</td>
                <td>30-Nov-2025</td>
                <td className="pending">Pending</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Essay on Environmental Issues</td>
                <td>28-Nov-2025</td>
                <td className="submitted">Submitted</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>Physics Lab Report</td>
                <td>01-Dec-2025</td>
                <td className="pending">Pending</td>
              </tr>
              <tr>
                <td>Computer Science</td>
                <td>React Frontend Mini Project</td>
                <td>05-Dec-2025</td>
                <td className="pending">Pending</td>
              </tr>
              <tr>
                <td>Social Studies</td>
                <td>History Chapter Review Notes</td>
                <td>29-Nov-2025</td>
                <td className="submitted">Submitted</td>
              </tr>
            </tbody>
          </table>

          {/* Marks */}
          <h2 className="section-title">Marks</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Mid Exam</th>
                <th>Assignment</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>28/30</td>
                <td>9/10</td>
                <td>37/40</td>
              </tr>
              <tr>
                <td>English</td>
                <td>25/30</td>
                <td>10/10</td>
                <td>35/40</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>24/30</td>
                <td>8/10</td>
                <td>32/40</td>
              </tr>
              <tr>
                <td>Computer Science</td>
                <td>27/30</td>
                <td>9/10</td>
                <td>36/40</td>
              </tr>
              <tr>
                <td>Social Studies</td>
                <td>26/30</td>
                <td>10/10</td>
                <td>36/40</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
