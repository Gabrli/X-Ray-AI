
export default function About(){
    return (
        <section className="w-full flex flex-col gap-4 justify-center items-center">
            <h3 className="heading w-full text-white font-bold flex justify-center items-center gap-4 text-center pt-60 text-5xl">What <p className="text-primary">is</p> that...</h3>
            <p className="text-white w-1/2">This project is the picture classificator working on my AI neural network basic on <a className="text-primary border-b border-primary font-medium" href="https://www.cs.toronto.edu/~kriz/cifar.html">CIFAR-10</a> dataset. Currently I'm working on model whose will be classific a lot of diffrent fractures. When I done this app I'm 15, so if you want to help in building new AI, <a href="#getintouch" className="text-primary font-medium border-b border-primary">get in touch</a>.</p>
        </section>
    )
}