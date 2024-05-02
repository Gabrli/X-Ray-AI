
export default function NavLink(props: {href:string, content:string }){
    const { href, content } = props
    return (
        <a className="transition duration-500 ease-in-out text-white font-500 pl-6 pr-6 pt-1 pb-1 rounded-full hover:bg-white/20 " href={href}>{content}</a>
    )
}