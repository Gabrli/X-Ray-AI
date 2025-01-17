import { ReactNode } from "react";

interface IBtn{
    styles?: string;
    astyles?: string;
    href?:string;
    content?:string;
    variant?:string;
    icon?: ReactNode
    isActive?:boolean;
    setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
    fun?: () => void;   
}
export type { IBtn }