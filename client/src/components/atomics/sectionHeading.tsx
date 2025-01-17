export default function SectionHeading(props: { text: string, styles?: string }) {
  const { text, styles } = props;
  return (
    <h3 className={`${styles} heading text-white font-bold text-center  text-5xl mobile2:text-4xl `}>
      {text}
    </h3>
  );
}
