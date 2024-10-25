import NavLink from "./navLink";

export default function Nav(){
 
    return (
        <nav className={`flex justify-center  items-center gap-6 mobile2:gap-0`}>
            <NavLink href="#" content="FAQ "  styles="pl-6 pr-6 pt-1 pb-1"/>
            <NavLink href="#" content="Repo" styles="pl-6 pr-6 pt-1 pb-1"/>
            <NavLink href="#" content="About" styles="bg-primary h-[40px] w-[100px] rounded-[8px] flex justify-center items-center"/>
        </nav>
    )
}