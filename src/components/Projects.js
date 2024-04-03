import React from 'react';
import { useState } from 'react';
import '../App.css';



const Projects = () => {
  // Example educational background data
  const projects = [
    {
      id: 1,
      name: 'FribaGo',
      address: 'https://fribago.com',
      img: 'fribago.jpg',
      type: 'Web Pages',
      description:
        'Fribago.com is a site for disc golfers offering a new option for saving the results of disc golf rounds and statistics. FribaGo is currently in a test phase with a limited user count.',
    },
    {
      id: 2,
      name: 'Portfolio pages',
      address: 'https://github.com/MarisCode/MarisPortfolio',
      img: 'portfolio.jpg',
      type: 'GitHub repository',
      description:
        'The portfolio site is a project that is constantly changing, updating and developing. I wanted to create a website that looks like me, and through which I can present my skills and interests in the IT field.',
    },
    {
      id: 3,
      name: 'My Nature',
      address: 'https://github.com/MarisCode/MyNature',
      img: 'mynature.jpg',
      type: 'GitHub repository',
      description:
        'The website made as the final project of my very first HTML & CSS course. My expertise in producing code has grown from this project, but I still stand behind the topic and visuality of the site.',
    },
  ];

  const [hidden, setHidden] = useState(false);

  const toggle = () => {
    setHidden(!hidden);
  }

  return (
    <div className="educational-background container">
      <button className="btn btn-custom btn-lg btn-bottom" onClick={() => toggle()}><h2>Projects</h2></button>
      {
        hidden ? 
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                <div className="card h-100 shadow">
                  <img className="card-img-top" src={require(`../assets/images/${project.img}`)} alt="project" />
                  
                  <div className="card-body">
                    <p className="card-text">{project.description}</p>
                  </div>
                  <div className="card-footer text-muted">
                    <a className="link-btn" href={project.address}>{project.type}</a>
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



export default Projects;