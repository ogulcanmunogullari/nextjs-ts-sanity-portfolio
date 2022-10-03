import { Skill } from "../typings"

export const fetchSkills = async () => {
  const res = await fetch(
    `https://ogulcanmunogullari.netlify.app/api/getSkills`,
  )
  const data = await res.json()
  const skills: Skill[] = data
  return skills
}
