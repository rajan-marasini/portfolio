import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/project";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects &&
                    projects.map((project) => (
                        <motion.div
                            className="relative rounded-lg h-80 w-full"
                            key={project.id}
                            initial={{ opacity: 0, top: "100px" }}
                            whileInView={{ opacity: 1, top: "0px" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                bounce: 1,
                            }}
                        >
                            <img
                                src={project.src}
                                alt="AirMax Pro"
                                className="z-0 h-full w-full rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-left">
                                <h1 className="text-lg font-semibold text-primary">
                                    {project.title}
                                </h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    {project.des}
                                </p>
                                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        Visit link <FaArrowRight />
                                    </a>
                                </button>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;
