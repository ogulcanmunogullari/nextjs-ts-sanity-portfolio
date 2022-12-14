import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import About from "../components/About"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];

}

const Home: NextPage<Props> = ({ pageInfo, skills, projects, socials }) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials
    }
  }
}