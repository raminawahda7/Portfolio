import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../apis/projects";
const Projects = () => {
  // const [projectInfo, setProjectInfo] = useState([]);

  // const fetchProjects = async () => {
  //   const response = await projects.get("/projects/");
  //   console.log("-------------------", response.data);
  //   setProjectInfo(response.data);
  // };
  const projectInfo = [
    {
      name: "Serviz",
      description:
        "Serviz is the first repairmen application in Palestine where you can order fixers from different categories in maintenance and finishing.",
      github: "https://github.com/The-Fire-Starters/servize.git",
      demo:
        "https://drive.google.com/file/d/1pQoAf9X4SjD6rpP_aY-fioSlqb75pYvX/view?usp=sharing",
      image: "https://www.linkpicture.com/q/serviz.jpg",
    },
    {
      name: "Sharkona",
      description:
        "Sharkona is a Palestinian website contains events in Palestine so you never miss any event you are interested in and love to be part of.",
      github: "https://github.com/greenfield-sharkona/sharkona_v2.git",
      demo: "",
      image:
        "https://www.linkpicture.com/q/68747470733a2f2f692e696d6775722e636f6d2f313676745a58352e706e67.png",
    },
  ];
  // console.log("s-s-s-s-s", projectInfo);

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

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  return (
    <>
      <section>
        <div
          className="ui center aligned container"
          style={{ padding: " 9.125em 0 " }}
        >
          {createProjectCards()}
        </div>
      </section>
    </>
  );
};
export default Projects;
