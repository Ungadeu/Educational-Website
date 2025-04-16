import React, { useEffect, useState } from 'react';

const CareersList = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/careers-csv')
      .then((res) => res.json())
      .then((data) => setCareers(data))
      .catch((err) => console.error('Error loading careers:', err));
  }, []);

  return (
    <div>
      <h2>STEM Careers</h2>
      {careers.map((career) => (
        <div key={career.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <h3>{career.title}</h3>
          <p><strong>Major:</strong> {career.related_major}</p>
          <p><strong>Description:</strong> {career.description}</p>
          <p><strong>Education:</strong> {career.required_education}</p>
          <p><strong>Salary:</strong> {career.median_salary}</p>
          <p><strong>Skills:</strong> {career.skills}</p>
        </div>
      ))}
    </div>
  );
};

export default CareersList;
