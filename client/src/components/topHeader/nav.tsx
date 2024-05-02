import NavLink from "./navLink";

export default function Nav(){
    return (
        <nav className="flex justify-center items-center gap-6">
            <NavLink href="#" content="FAQ"/>
            <NavLink href="#" content="Repo"/>
        </nav>
    )
}