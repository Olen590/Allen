import React from 'react';
import './Academic.css'; // Link to CSS file

function Academic() {
  return (
    <section className="academic-section" id="Academic">
      <h2>Academic Details</h2>
      <div className="academic-item">
        <h3>Bachelor of Technology in Computer Science</h3>
        <p>malnad college of engineering, 2022 - 2026</p>
        <p>CGPA: 9/10</p>
      </div>

      <div className="academic-item">
        <h3>Higher Secondary (12th)</h3>
        <p>D T M N PU COLLEGE BETTADPURA, 2021-2022</p>
        <p>Percentage: 97%</p>
      </div>

      <div className="academic-item">
        <h3>Secondary (10th)</h3>
        <p>D T M N SCHOOL BETTADPURA, 2020</p>
        <p>Percentage: 94%</p>
      </div>
    </section>
  );
}

export default Academic;
