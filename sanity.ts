import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

type SanityConfig = {
  projectId: string
  dataset: string
  useCdn: boolean
  apiVersion: string
}

export const config = <SanityConfig>{
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "6gr7dn8v",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source)
