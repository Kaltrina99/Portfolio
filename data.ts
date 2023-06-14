import {RiCodeView, RiComputerLine, RiServerFill} from 'react-icons/ri'
import {BsBraces, BsCircleFill} from 'react-icons/bs'
import { IProject, IServices, ISkill } from './type'


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
        level:'80%',
        Icon:BsCircleFill
    },
    {
        name:'SQL Server',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'JavaScript',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'React',
        level:'50%',
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
        name:'Visual Studio Code',
        level:'90%',
        Icon:BsCircleFill
    },
    {
        name:'Canva',
        level:'70%',
        Icon:BsCircleFill
    },
    {
        name:'Figma',
        level:'50%',
        Icon:BsCircleFill
    },
    {
        name:'Krita',
        level:'75%',
        Icon:BsCircleFill
    },
    {
        name:'Git',
        level:'80%',
        Icon:BsCircleFill
    }
]

export const projects:IProject[]=[
    {
        name:"Survey Web - RiVlersim",
        description:"An web aplication that will manage survey and will help in collecting data, a reconstructed idea of KapSurvey ",
        image_path:"/images/Rivleresim.png",
        deployeed_url:"https://github.com/Kaltrina99/Survey.Web",
        github_url:"https://github.com/Kaltrina99/Survey.Web",
        category:[".Net Core","Challanges"],
        tag:[".Net Core","JavaScript","Sql Server","Bootstrap","AMCharts","MailJet"]
    },
    {
        name:"KapSurvey",
        description:"An web aplication that will manage questionire and will help in collecting data",
        image_path:"/images/KapSurvey.png",
        deployeed_url:"https://kapsurvey.com/",
        github_url:"https://kapsurvey.com/",
        category:[".Net Core"],
        tag:[".Net Core","JavaScript","Sql Server","AMCharts","MailJet"]
    },
    {
        name:"Portfolio",
        description:"My own portfolio website",
        image_path:"/images/avatar.gif",
        deployeed_url:"https://github.com/Kaltrina99/Portfolio",
        github_url:"https://github.com/Kaltrina99/Portfolio",
        category:["React","Next","Challanges"],
        tag:["React.js","Next.js","TypeScript","Tailwind"]
    },
    {
        name:"Convosio",
        description:"An web aplication chat system that help your site visitors or clients by offering live chat support.",
        image_path:"/images/convosio-logo.jpg",
        deployeed_url:"https://convosio.com/",
        github_url:"https://convosio.com/",
        category:[".Net Core"],
        tag:[".Net Core","JavaScript","Sql Server",]
    },
    {
        name:"Carpool",
        description:"A carpool version of an app using React Native",
        image_path:"/images/Carpool.png",
        deployeed_url:"https://github.com/Kaltrina99/Carpool",
        github_url:"https://github.com/Kaltrina99/Carpool",
        category:["React","Challanges"],
        tag:["React Native"]
    }
]