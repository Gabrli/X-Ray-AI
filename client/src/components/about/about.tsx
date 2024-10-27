export default function About() {
  return (
    <section id="about" className="w-full flex flex-col gap-4 justify-center items-center">
      <h3 className="heading w-full text-white font-bold flex justify-center items-center gap-4 text-center pt-60 text-5xl mobile2:text-4xl">
        What <p className="text-primary">is</p> that...
      </h3>
      <p className="text-white w-1/2 text-center mobile2:w-[90%] mobile2:text-[14px]">
        This project is the x-ray picture classificator working on my AI neural
        network. This model can classific a lot of different fractures such as{" "}
        <strong>
          ( avulsion, comminuted, greenstick, hairline, impacted, longitudinal,
          oblique, pathological, spiral ).
        </strong>{" "}
        When I done this app I'm 15, so if you want to help in building new AI,{" "}
        <a 
          href="#getintouch"
          className="text-primary font-medium border-b border-primary"
        >
          get in touch
        </a>
        .
      </p>
    </section>
  );
}
