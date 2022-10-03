import { Social } from "../typings"

export const fetchSocials = async () => {
  const res = await fetch(
    `https://ogulcanmunogullari.netlify.app/api/getSocials`,
  )
  const data = await res.json()
  const socials: Social[] = data
  return socials
}
