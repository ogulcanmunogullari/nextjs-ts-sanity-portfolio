import React from "react"
import { motion } from "framer-motion"
import { Project, Skill } from "../typings";
import { urlFor } from "../sanity";
import SkillComponent from "./Skill";


type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-12 mt-3 xs:top-14 tracking-[10px] uppercase text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative sm:h-full w-full flex sm:flex-col
            snap-mandatory  snap-x overflow-x-scroll  sm:snap-y  sm:overflow-x-hidden sm:overflow-y-scroll   sm:scrollbar-none  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin  z-20">
                {projects.map((project) => (
                    <div
                        className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 "
                        key={project._id}>
                        <motion.img
                            initial={{ y: -50, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url() || ""}
                            className="w-full h-20 sm:w-2/5 sm:h-auto object-contain"
                        />
                        <div className="xs:space-y-10 container">
                            <h4 className="text-xl xs:text-2xl text-semibold text-center">
                                {project.title}
                            </h4>
                            <p className="text-xs sm:text-lg mt-4 text-justify">
                                {project.summary}
                            </p>
                            <div className="mt-2 mb-2">
                                <a
                                    href={project?.linkToBuild}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#F7AB0A] text-sm sm:text-lg font-semibold">
                                    View Project
                                </a>
                            </div>

                            <div className="grid grid-cols-5 xs:grid-cols-6 gap-1">
                                {project?.tecnologies.map((technology: Skill) => (
                                    <SkillComponent key={technology._id} directionLeft={false} projectSize={true} skillImage={technology.image} />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-0" />
        </motion.div>
    )
}

export default Projects
