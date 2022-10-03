import { Project } from "../typings"

export const fetchProjects = async () => {
  const res = await fetch(
    `https://ogulcanmunogullari.netlify.app/api/getProjects`,
  )
  const data = await res.json()
  const projects: Project[] = data
  return projects
}
