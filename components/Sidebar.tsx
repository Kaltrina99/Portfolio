import avatar from '../public/avatar.gif'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillCodepenSquare, AiFillCode } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiCloudDownload } from 'react-icons/gi'
import {useTheme} from 'next-themes'

const Sidebar = () => {
    const{theme,setTheme}=useTheme();
    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    }
    return (
        <div>
            <Image src={avatar}
                alt="avatar.gif"
                className='w-32 h-32 mx-auto round-full' />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-white'>
                <span>Kaltrina</span> Aliu
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
            <a className='flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 item-center' 
            href='' 
            download='name'>
                <GiCloudDownload className='w-6 h-6 text-black' />Download Resume</a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-black md:w-full'>
                <a href='https://www.linkedin.com/in/kaltrina-aliu/'><AiFillLinkedin className='w-8 h-8 cursor-pointer' /></a>
                <a href='https://github.com/Kaltrina99'><AiFillGithub className='w-8 h-8 cursor-pointer' /></a>
                <a href='https://codepen.io/Kaltrina99'><AiFillCodepenSquare className='w-8 h-8 cursor-pointer' /></a>
                <a href='https://www.freecodecamp.org/kaltrinaaliu'><AiFillCode className='w-8 h-8 cursor-pointer' /></a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{marginLeft:'-1rem:',marginRight:'-1rem:'}}>
                <div className='flex items-center justify-center space-x-2'>
                <GoLocation className='text-black dark:text-white'  />
                    <span ><a href='https://goo.gl/maps/qGsQixjBSZtu8Mjs8'>Pristina, Kosovo</a></span>
                </div>
            </div>

            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-yellowCS focus:outline-none'
            onClick={()=>window.open('mailto:kaltrina99a@hotmail.com')}
            >Email Me</button>
            <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-white rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-yellowCS'>Toggel Theme</button>
        </div>
    )
}

export default Sidebar