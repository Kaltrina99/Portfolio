import { IconType } from "react-icons";

export interface IServices
{
    title:string;
    about:string;
    Icon:IconType;
}


export interface ISkill{
    name:string;
    level:string;
    Icon:IconType;
}

export interface IProject{
    name:string;
    description:string;
    image_path:string;
    deployeed_url:string;
    github_url:string;
    category:Category[];
    tag:string[];
}

export type Category=".Net Core"|"React"|"Next"|"Challanges"