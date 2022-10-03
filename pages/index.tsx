import type { GetStaticProps } from "next"
import Link from "next/link"
import About from "../components/About"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { PageInfo, Project, Skill, Social } from "../typings"

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];

}

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-start">

      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center ">
        <Projects projects={projects} />
      </section>

      <Link href="#hero">
        <a>
          <footer className="text-center sticky cursor-pointer bottom-5 w-full text-gray-500 tracking-[10px] uppercase hover:text-[#F7AB0A]">
            Go Up
          </footer>
        </a>
      </Link>

    </div >
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resSocial = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
  const dataSocial = await resSocial.json()
  const socials: Social[] = dataSocial

  const resPageInfo = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
  const dataPageInfo = await resPageInfo.json()
  const pageInfo: PageInfo = dataPageInfo

  const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
  const dataSkills = await resSkills.json()
  const skills: Skill[] = dataSkills

  const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
  const dataProjects = await resProjects.json()
  const projects: Project[] = dataProjects
  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    },
    revalidate: 10,
  }
}