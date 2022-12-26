import Bar from "../components/Bar"
import { languages,tools } from "../data"

const resume = () => {
  return (
    <div className="px-6 py-2">
        <div className="grid md:grid-cols-2 grid-6">
          <div>
            <h5 className="my-3 font-bold text-2x1">Education</h5>
            <div>
              <h5 className="my-2 font-bold text-x1">BSc Software Engineering</h5>
              <p className="font-semibold">Riinvest College (2017-2021)</p>
              <p className="my-3">I graduated in Software Engineering 
              <br/>from Riinvest College</p>
            </div>
          </div>
       
          <div>
            <h5 className="my-3 font-bold text-2x1">Experience</h5>
            <div>
              <h5 className="my-2 font-bold text-x1">BSc Software Engineering</h5>
              <p className="font-semibold">Riinvest College</p>
              <p className="my-3">I graduated in Software Engineering <br/>from Riinvest College</p>
            </div>
          </div>
       
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