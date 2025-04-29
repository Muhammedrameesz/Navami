import Projects from "@/components/projects/Projects"
import UpcomingProjects from "@/components/projects/UpcomingProjects"
import LastSection from "@/components/projects/LastSection"

export default function Page() {
  return (
    <div>
        <Projects/>
        <UpcomingProjects/>
        <LastSection/>
    </div>
  )
}
