import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../apis/projects";
const Projects = () => {
  const [projectInfo, setProjectInfo] = useState([]);

  const fetchProjects = async () => {
    const response = await projects.get("/projects/");
    console.log("-------------------", response.data);
    setProjectInfo(response.data);
  };

  const createProjectCards = () => {
    return (
      <div className="ui three stackable raised cards">
        {projectInfo.map((project) => {
          if (!project) {
            return <div>Loading..</div>;
          } else {
            return (
              <ProjectCard
                name={project.name}
                description={project.description}
                image={project.image}
                github={project.github}
                demo={project.demo}
                key={project.name}
              />
            );
          }
        })}
      </div>
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <section >
        <div className="ui center aligned container" style={{padding:" 9.125em 0 "}}>
          {createProjectCards()}
        </div>
      </section>
    </>
  );
};
export default Projects;
