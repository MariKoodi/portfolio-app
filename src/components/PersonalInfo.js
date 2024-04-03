import React from 'react';
import '../App.css';
import MyImage from '../assets/images/potretti.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const PersonalInfo = () => {

  return (
      <div className="personal-info container mt-5">
        <div className="card mb-3 shadow about-me ">
          <div className="row no-gutters d-flex flex-wrap-reverse">
            
            <div className="col-md-8">
              <div className="card-body d-flex flex-column justify-content-between rounded-start">
                <h1 className="card-title">About me</h1>
                <p className="card-text">
                  I'm Mari Nieminen, second-year IT tradenomy student at Häme University of Applied Sciences. My goal is to learn how to design and implement functional, easy-to-use, inventive and eye-pleasing solutions for the customer's needs or for my own and the world's pleasure.
                </p>

                <div className="d-flex icons flex-wrap">
                  <a href="https://www.linkedin.com/in/marinieminen1001101/">
                    <FontAwesomeIcon icon={faLinkedin} className="icon pr-5" />
                  </a>
                  <a href="https://github.com/MarisCode">
                    <FontAwesomeIcon icon={faGithub} className="icon pr-3" />
                  </a>
                  <a href="mailto:mari.nieminen@student.hamk.fi">
                    <FontAwesomeIcon icon={faEnvelope} className="icon pr-3" />
                  </a>
                </div>
                  
              </div>
            </div>
            <div className="col-md-4 portrait">
              <img src={MyImage} alt="Me" className="img-fluid rounded-end" />
            </div>
          </div>
        </div>
      </div>
      
  );

};

export default PersonalInfo;

