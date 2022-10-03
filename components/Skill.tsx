import React from "react"
import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { Image } from "../typings"

type Props = {
  directionLeft?: boolean
  skillImage: Image
  projectSize?: boolean
}

function Skill({ directionLeft, skillImage, projectSize }: Props) {
  console.log(projectSize)
  return (
    <div className="group relative flex">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -20 : 20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skillImage).url()}
        className={`rounded-2xl border border-gray-500 object-cover 
        ${projectSize ? "w-9 h-w-9" : "w-16 h-16 xs:w-24 xs:h-24"} xl:w-32 xl:h-32  filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out`}
      />
    </div>
  )
}

export default Skill
