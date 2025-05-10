import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center mb-8 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={150}
                height={150}
                className="rounded-xl mb-6"
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.9 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="text-2xl font-semibold mb-2">{project.title}</h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex items-center gap-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-neutral-800 px-2 py-1 rounded-full text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
