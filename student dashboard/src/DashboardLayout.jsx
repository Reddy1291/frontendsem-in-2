<section className="content">
  <h1>Dashboard</h1>
  <p>Your courses, assignments, notifications and progress are displayed here.</p>

  {/* Quick Summary Cards */}
  <div className="cards">
    <div className="card">Total Courses: 5</div>
    <div className="card">Assignments Due: 2</div>
    <div className="card">Average Marks: 88%</div>
  </div>

  {/* Assignments Section */}
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
        <td>Maths</td>
        <td>Unit–2 Problems</td>
        <td>30-Nov-2025</td>
        <td className="pending">Pending</td>
      </tr>
      <tr>
        <td>English</td>
        <td>Essay Writing</td>
        <td>28-Nov-2025</td>
        <td className="submitted">Submitted</td>
      </tr>
      <tr>
        <td>Science</td>
        <td>Lab Report</td>
        <td>1-Dec-2025</td>
        <td className="pending">Pending</td>
      </tr>
    </tbody>
  </table>

  {/* Marks Section */}
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
        <td>Maths</td>
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
    </tbody>
  </table>
</section>
