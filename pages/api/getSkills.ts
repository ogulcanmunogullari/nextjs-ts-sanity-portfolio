import type { NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Skill } from "../../typings"

const query = groq`*[_type == "skill"]`

export default async function handler(res: NextApiResponse) {
  const skills: Skill[] = await sanityClient.fetch(query)
  res.status(200).json(skills)
}
