import HeroImg from '../../assets/HomePage/hero-img.png'

const Hero = () => {
  return (
    <section className='max-w-[1250px] flex flex-col mx-auto mb-14' id="hero">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between w-full">
        <div className="flex flex-row gap-10 lg:gap-0 lg:flex-col m-10">
          <a className='text-violet-800 hover:text-violet-500 text-3xl lg:text-2xl my-3' href="https://www.linkedin.com/in/silpharny/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className='text-violet-800 hover:text-violet-500 text-3xl lg:text-2xl my-3' href="https://github.com/Silpharny" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className='text-violet-800 hover:text-violet-500 text-3xl lg:text-2xl my-3' href="https://instagram.com/silpharny" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="info">
          <h2 className='text-4xl lg:text-6xl leading-snug font-semibold'>Olá, eu sou o Sil</h2>
          <h3 className=' text-lg leading-snug font-semibold'>Front-end Developer</h3>
          <p className='  max-w-80'>
            De atleta profissional a DEV role para baixo e descubra essa
            história{" "}
          </p>
          <a href="#contact" className="hidden lg:inline-block bg-violet-800 hover:bg-violet-500 text-zinc-50 text-lg font-medium  mt-6 py-5 px-8 rounded-2xl">
            Entre em contato <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
        <div className="relative">
          <img className='w-96 lg:w-full' src={HeroImg} alt="Me" />
        </div>
      </div>
      <a href="#about" className="self-center text-lg font-semibold mt-5">
        Role para baixo<i className="fas fa-arrow-down text-violet-800 text-xl ml-2 animate-bounce"></i>
      </a>
    </section>
  );
};

export default Hero;
