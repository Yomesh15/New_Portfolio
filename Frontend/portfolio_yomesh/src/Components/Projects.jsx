import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import sdcafeproject from "../Assets/sdcafeproject.png";
import quizproject from "../Assets/quizproject.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <span className="section-subtitle">— MY WORK</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">
          A selection of projects showcasing my skills in React, MERN stack,
          and modern UI development.
        </p>

        <div className="projects-grid">

          {/* project 1 */}
          <div className="project-card">
            <img
              src={sdcafeproject}
              alt="SD Cafe Website"
            />

            <div className="project-content">
              <h3>SD Cafe Restaurant</h3>
              <p>
                A modern, responsive restaurant website built using React,
                featuring menu sections and smooth UI interactions.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>Vercel</span>
              </div>

              <div className="project-links">
                <a
                  href="https://sd-cafe-restaurant.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <FiExternalLink />
                </a>
                <a
                  href="https://github.com/Yomesh15/SD-Cafe-Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
              src={quizproject}
              alt="Quiz Game Website"
            />

            <div className="project-content">
              <h3>Quiz Game</h3>
              <p>
                Personal quiz game website with animations, responsive layout,
                and modern dark UI. Which help to boost your Confidence and grow your Knowledge !
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>Framer Motion</span>
              </div>

              <div className="project-links">
                <a href="https://yomesh15.github.io/Quiz-Capstone-Project/" target="_blank">
                  Live <FiExternalLink />
                </a>
                <a href="https://github.com/Yomesh15/Quiz-Capstone-Project/" target="_blank">
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3
          <div className="project-card">
            <img
              src="https://via.placeholder.com/600x400"
              alt="MERN App"
            />

            <div className="project-content">
              <h3>MERN CRUD App</h3>
              <p>
                Full-stack MERN application with authentication, CRUD operations,
                and REST API integration.
              </p>

              <div className="project-tech">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank">
                  Live <FiExternalLink />
                </a>
                <a href="https://github.com/" target="_blank">
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
