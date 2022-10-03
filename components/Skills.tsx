import React from "react"
import Skill from "./Skill"
import { motion } from "framer-motion"
import { Skill as Skills } from "../typings";

type Props = {
  skills: Skills[];
}

function Skills({ skills }: Props) {
  const left = skills.slice(0, skills.length / 2)
  const right = skills.slice(skills.length / 2, skills.length)
  return (
    <motion.div className="flex relative flex-col xl:flex-row xl:px-10 min-h-screen text-center md:text-left xl:space-y-0 justify-center container mx-auto items-center">
      <h3 className="absolute top-12 mt-3 xs:top-14 uppercase tracking-[10px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 xs:top-24 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for color.
      </h3>
      <div className="grid grid-cols-3 mt-20 gap-1 xs:gap-5">
        {left.map((skill) => {
          return (
            <Skill key={skill._id} directionLeft={true} skillImage={skill.image} />

          )
        })}
        {right.map((skill) => {
          return (
            <Skill key={skill._id} directionLeft={false} skillImage={skill.image} />

          )
        })}

      </div>
    </motion.div>
  )
}

export default Skills
