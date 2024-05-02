import Logo from "./logo";
import Nav from "./nav";

export default function TopHeader(){
    return(
        <header className="w-full rounded-full fixed top-0 left-0  h-custom-h-top-header flex justify-evenly items-center">
            <Logo/>
            <Nav/>
        </header>
    )
}