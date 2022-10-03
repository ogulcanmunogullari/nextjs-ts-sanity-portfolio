import type { NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Project } from "../../typings"

const query = groq`*[_type == "project"]{
  ...,
  tecnologies[]->
}`

export default async function handler(res: NextApiResponse) {
  const projects: Project[] = await sanityClient.fetch(query)
  res.status(200).json(projects)
}
