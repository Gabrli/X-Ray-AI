
export default function NavElement(props: {content:string, href:string}){
    const { content, href } = props
    return (
        <li><a href={href}>{content}</a></li>
    )
}