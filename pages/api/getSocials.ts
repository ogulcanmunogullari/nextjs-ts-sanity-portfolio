import type { NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Social } from "../../typings"

const query = groq`*[_type == "social"]`

export default async function handler(res: NextApiResponse) {
  const socials: Social[] = await sanityClient.fetch(query)
  res.status(200).json(socials)
}
