import {RiCodeView, RiComputerLine, RiServerFill} from 'react-icons/ri'
import {BsBraces, BsCircleFill} from 'react-icons/bs'
import { IServices, ISkill } from './type'


export const services:IServices[]=[
    {
        title:"Frontend Development",
        about:"I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>",
        Icon:RiComputerLine,
    },
    {
        title:"Backend Development",
        about:"Skilled in <b>SQL Server</b> and <b>.Net Core</b>",
        Icon:RiServerFill,
    },
    {
        title:"API Development",
        about:"I can develope APIs with controllers and also minimal APIs using <b>.NET Core</b>",
        Icon:BsBraces,
    },
    {
        title:"Competitive Coder",
        about:"A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
        Icon:RiCodeView,
    }
]

export const languages:ISkill[]=[
    {
        name:'.Net Core',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'SQL Server',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name:'React',
        level:'60%',
        Icon:BsCircleFill
    }, 
    {
        name:'Bootstrap',
        level:'80%',
        Icon:BsCircleFill
    }
]

export const tools:ISkill[]=[
    {
        name:'Canva',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'Figma',
        level:'60%',
        Icon:BsCircleFill
    },
    {
        name:'Krita',
        level:'80%',
        Icon:BsCircleFill
    }
]