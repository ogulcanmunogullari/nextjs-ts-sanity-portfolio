import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {

  const [text, counter] = useTypewriter({
    words: pageInfo.slidingText,
    loop: true,
    delaySpeed: 1500,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto z-10 object-cover"
        src={urlFor(pageInfo?.heroImage).url() || ""}
        alt="Picture of the author"
        width="128px"
        height="128px"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-xl xs:text-2xl md:text-6xl font-semibold px-10">
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <a>
              <button className="heroButton">About</button>
            </a>
          </Link>
          <Link href="#skills">
            <a>
              <button className="heroButton">Skills</button>
            </a>
          </Link>
          <Link href="#projects">
            <a>
              <button className="heroButton">Projects</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
