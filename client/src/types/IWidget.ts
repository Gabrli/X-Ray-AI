import { ReactNode } from "react";

interface IWidget{
    variant: string,
    content: string,
    icon: ReactNode,
    styles?:string
}

export type { IWidget }