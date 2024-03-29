import { motion } from "framer-motion"
import { useState } from "react"
import { fadeInUp, stagger } from "../animations"
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar"
import { projects as projectData } from "../data"
import { Category } from "../type"

const Projects = () => {
  const [projects, setProjects]=useState(projectData);
  const [active, setActive] = useState("All")
  const  handlerFilterCategory=(category:Category | "All")=>{
    if(category==="All"){
      setProjects(projectData);
      setActive(category);
      return;
    }
    const newArray= projectData.filter((project)=>project.category.includes(category));
    setProjects(newArray);
    setActive(category);
  };
    return (
      <div className="p-4 overflow-y-scroll">
        <ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={active}/>

        <div className="relative grid grid-cols-12 gap-4 my-3">
          {
            projects.map(project=>(<div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" >
              <ProjectCard project={project} key={project.name} />
            </div>))
          }
        </div>

      </div>
    )
  }
  
  export default Projects