import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://ogulcanmunogullari.netlify.app/api/getPageInfo`,
  )
  const data = await res.json()
  const pageInfo: PageInfo = data
  return pageInfo
}
