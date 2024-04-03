import React from 'react';
import { useState } from 'react';
import '../App.css';



const WorkExperience = () => {
  // Example educational background data
  const jobs = [
    {
      id: 1,
      company: 'Metsä Tissue',
      title: 'Study leave',
      year: '09/2022 -',
      description:
        'I am passionately studying computer science at Häme University of Applied Sciences.',
    },
    {
      id: 2,
      company: 'Metsä Tissue',
      title: 'Operator, Full-time',
      year: '01/2010 - 08/2022',
      description:
        'Laboratory work in the laboratory of a paper mill. Quality and reliability, accuracy, compliance with instructions, documentation and reporting are an essential part of all work.',
    },
    {
      id: 3,
      company: 'Metsä Tissue',
      title: 'Operator, Part-time',
      year: '04/2009 - 12/2009 -',
      description:
        'Laboratory work in the laboratory of a paper mill.',
    }
  ];

  const [hidden, setHidden] = useState(false);

  const toggle = () => {
    setHidden(!hidden);
  }

  return (
      <div className="educational-background container">
        <button className="btn btn-custom btn-lg btn-mid" onClick={() => toggle()}><h2>Work Experience</h2></button>

        {
          hidden ? 
      
          <div className="row">
            {jobs.map((job) => (
              <div className="col-md-6 col-lg-4 mb-4" key={job.id}>
                <div className="card h-100 shadow">
                  <div className="card-header">
                    <h5 className="card-title mb-0">{job.company}</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.title}
                    </h6>
                    <p className="card-text">{job.description}</p>
                  </div>
                  <div className="card-footer text-muted">
                    <small>{job.year}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          : null
        }
      </div>
    );
};



export default WorkExperience;