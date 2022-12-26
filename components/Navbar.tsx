import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem: FunctionComponent<{
    activeItem: string
    setactiveItem: Function
    name: string
    route: string
 }>=({activeItem,name,route,setactiveItem})=>{
    return activeItem !== name ? (
                <Link href={route}>
                        <span onClick={()=>setactiveItem(name)} className="hover:text-yellowCS">{name}</span>
                </Link>
            ):null       
    }

const Navbar = () => {
const [activeItem, setactiveItem] = useState<string>('')    
const {pathname} =useRouter()

    useEffect(() => {
      if(pathname==="/") setactiveItem('About')
      if(pathname==="/projects") setactiveItem('Projects')
      if(pathname==="/resume") setactiveItem('Resume')
    
    }, [])
    
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-lg font-bold border-b-4 border-purple-600 tex-xl">{activeItem}</span>
            <div className="flex space-x-5 text-lg">
              <NavItem activeItem={activeItem} setactiveItem={setactiveItem}
              name='About' route="/"/>
              <NavItem activeItem={activeItem} setactiveItem={setactiveItem}
              name='Projects' route="/projects"/>
              <NavItem activeItem={activeItem} setactiveItem={setactiveItem}
              name='Resume' route="/resume"/>

            </div>

        </div>
    )
}

export default Navbar