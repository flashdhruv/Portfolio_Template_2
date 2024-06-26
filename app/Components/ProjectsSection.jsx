"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "The current portfolio that you're viewing!",
    image: "/images/Projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/flashdhruv/Portfolio_Template_2",
    previewUrl: "https://portfolio-template-2-p4azpbzde-dhruv-bahls-projects.vercel.app",
  },
  {
    id: 2,
    title: "Admin Portal Website",
    description: "An Introduction to Typescript. A portal that pulls personal information from an endpoint",
    image: "/images/Projects/admin-portal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/flashdhruv/employee-portal?tab=readme-ov-file",
    previewUrl: "https://flashdhruv.github.io/employee-portal",
  },
  {
    id: 3,
    title: "Pomodoro (MERN Full Stack)",
    description: "A website that makes The Pomodoro Technique fun! Try the functionality through the guest option!",
    image: "/images/Projects/pomodoro_method.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/flashdhruv/Pomodoro",
    previewUrl: "https://pomodoro-six-dun.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "Snake Game (Java)",
    description: "A recreation of the classic snake game to solidy OOP concepts",
    image: "/images/Projects/snake-game.png",
    tag: ["All"],
    gitUrl: "https://github.com/flashdhruv/Java-OOP-Snake",
    previewUrl: "https://github.com/flashdhruv/Java-OOP-Snake",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;