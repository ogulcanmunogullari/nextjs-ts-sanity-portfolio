import type { NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { PageInfo } from "../../typings"

const query = groq`*[_type == "pageInfo"][0]{
  ...,
  socials[]->
}`

export default async function handler(res: NextApiResponse) {
  const pageInfo: PageInfo = await sanityClient.fetch(query)
  res.status(200).json(pageInfo)
}
