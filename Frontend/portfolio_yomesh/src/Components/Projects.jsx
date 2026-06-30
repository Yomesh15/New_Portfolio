import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Velora from "../assets/velora.png";
import Project2 from "../assets/project2.png";

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
            <img src={Velora} alt="Velora" />

            <div className="project-content">
              <div className="project-info">
                <h3>Velora</h3>

                <p>
                  Velora is a modern MERN-stack ecommerce web application designed to
                  deliver a seamless and stylish online shopping experience. It features
                  responsive UI, secure authentication, product browsing, cart
                  management, and smooth user interactions with a clean and premium
                  design approach.
                </p>
              </div>

              <div className="project-footer">
                <div className="project-tech" style={{ paddingBottom: "14px" }}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>CSS</span>
                  <span>Vercel</span>
                  <span>AOS</span>
                  <span>Render</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://velora-self-sigma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <FiExternalLink />
                  </a>

                  <a
                    href="https://github.com/Yomesh15/Velora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Projectt 2 */}
          <div className="project-card">
            <img
              src={Project2}
              alt="DocVerse"
            />

            <div className="project-content">
              <h3>DocVerse</h3>
              <p>
                DocVerse is a full-stack MERN doctor appointment booking platform that enables patients to search for doctors, book appointments, and manage their bookings seamlessly. It includes secure user authentication, real-time appointment management, role-based access for patients and doctors, and a responsive, user-friendly interface for a smooth healthcare booking experience.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>Nodejs</span>
                <span>Vercel</span>
                <span>MongoDB</span>
                <span>Render</span>
                <span>Framer Motion</span>
              </div>

              <div className="project-links">
                <a href="https://doc-verse-gamma.vercel.app/" target="_blank">
                  Live <FiExternalLink />
                </a>
                <a href="https://github.com/Yomesh15/DocVerse" target="_blank">
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
