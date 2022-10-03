import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center sm:text-left md:flex-row container px-10 xs:px-2 sm:px-10 mx-auto justify-evenly items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <h3 className="absolute top-12 mt-3 xs:top-14 xs:mt-0 sm:top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="xs:-mb-10 sm:-mb-20 mt-20 xs:mt-12 md:mt-0 md:mb-0 w-32 h-32 xs:w-52 xs:h-52 md:w-72 md:h-72 xl:w-[500px] xl:h-[500px]  flex-shrink-0  rounded-full  object-cover"
        src={urlFor(pageInfo?.profilePic).url() || ""}
      />
      <div className="xs:space-y-5 sm:space-y-10 px-0 md:px-10">
        <h4 className="text-lg sm:text-3xl md:text-4xl font-semibold capitalize">
          {pageInfo.backgroundHead}
        </h4>
        <p className="text-xs xs:text-sm text-justify">
          {pageInfo.backgroundInfo}
        </p>
      </div>
    </motion.div>
  )
}
export default About
