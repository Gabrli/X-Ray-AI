
export default function SectionHeading(props: {text:string}){
    const { text } = props
    return(
        <h3 className="heading text-white font-bold text-center pt-60 text-5xl ">{text}</h3>
    )


}