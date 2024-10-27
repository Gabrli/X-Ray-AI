import { INavLink } from "../../types/INavLink"

export default function NavLink(props: INavLink){
    const { href, content, styles } = props
    return (
        <a  className={`transition duration-500 ease-in-out text-white font-500  rounded-full  ${styles} `} href={href}>{content}</a>
    )
}