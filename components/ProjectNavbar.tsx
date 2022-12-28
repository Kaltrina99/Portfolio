import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem : FunctionComponent<{value:Category | "All";
handlerFilterCategory:Function;
active:string
}> 
= ({value,handlerFilterCategory,active}) => {
    let className="cursor-pointer hover:text-purple-600 "
    if(active===value)
    className+="text-purple-600"
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>{value}</li>
  )
}


const ProjectNavbar : FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
        <NavItem {...props} value="All"/>
        <NavItem {...props} value=".Net Core"/>
        <NavItem {...props} value="React"/>
        <NavItem {...props} value="Next"/>
        <NavItem {...props} value="Challanges"/>
    </div>
  )
}

export default ProjectNavbar