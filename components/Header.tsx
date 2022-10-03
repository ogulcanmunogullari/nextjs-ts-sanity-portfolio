
import SocialIconComponent from "./SocialIcon";
import { motion } from "framer-motion"
import { Social } from "../typings";
type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  const otherSocials = socials.filter((social) => social.title !== "Linkedin")
  const linkedin = socials.filter((social) => social.title === "Linkedin")
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between container mx-auto z-20">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center">
        {otherSocials.map((social) => {
          return (
            <SocialIconComponent key={social._id} url={social.url} />
          )
        })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer">
        <SocialIconComponent url={linkedin[0].url} />
      </motion.div>
    </header>
  )
}
