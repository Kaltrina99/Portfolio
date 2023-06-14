import Bar from "../components/Bar"
import { languages,tools } from "../data"
import {motion} from 'framer-motion'
import {fadeInUp} from '../animations'
const resume = () => {
  return (  
    <div className="px-6 py-2">
        <div className="grid md:grid-cols-2 grid-6">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 font-bold text-2x1">Education</h5>
            <div className="">
              <h5 className="my-2 font-bold text-x1">BSc Software Engineering</h5>
              <p className="font-semibold">Riinvest College (2017-2021)</p>
              <p className="my-3">I graduated in Software Engineering 
              <br/>from Riinvest College</p>
            </div>
          </motion.div>
       
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 font-bold text-2x1">Experience</h5>
            <div className="overflow-y-scroll my-2" style={{ height: "25vh" }}>
              <h5 className="my-2 font-bold text-x1">Software Engineer</h5>
              <p className="font-semibold">Kosovo Electricity Distribution Company - KEDS (04/2021 - 02/2023)</p>
              <p className="my-3"></p>
              <hr></hr>
              <h5 className="my-2 font-bold text-x1">.NET Developer</h5>
              <p className="font-semibold">International Advisory, Products and Systems - i-APS (03/2021 - 12/2021)</p>
              <p className="my-3"></p>
              <hr></hr>
              <h5 className="my-2 font-bold text-x1">C# Developer</h5>
              <p className="font-semibold">The Social Plus - TSP (09/2020 - 03/2021)</p>
              <p className="my-3"></p>
              <hr></hr>
              <h5 className="my-2 font-bold text-x1">Full Stack Developer - Internship</h5>
              <p className="font-semibold">Application Development Center - APPDEC (04/2020 - 09/2020)</p>
              <p className="my-3"></p>
            </div>
          </motion.div>
       
        </div>
        <div className="grid md:grid-cols-2 grid-5">
          <div>
            <h5 className="my-3 font-bold text-2x1">Languages & Frameworks</h5>
            <div className="my-2 lg:px-4">
              {
              languages.map(Language=><Bar data={Language} key={Language.name}/>)
              }
            </div>
          </div>
          <div>
            <h5 className="my-3 font-bold text-2x1">Tools & Softwares</h5>
            <div className="my-2 lg:px-4">
              {
              tools.map(Tools=><Bar data={Tools} key={Tools.name}/>)
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default resume