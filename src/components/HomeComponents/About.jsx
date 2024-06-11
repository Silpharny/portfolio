import AboutImg from '../../assets/HomePage/about-img.png'
import AboutList from './AboutList';
import TitleSection from './TitleSection';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:my-28 mb-14 lg:mb-0 p-5 lg:p-0" id="about">
        <TitleSection title="Sobre mim"/>
        <div className="flex gap-10">
          <div className="hidden lg:block relative">
            <img className='max-w-full min-w-[100px] rounded-xl' src={AboutImg} alt="Me" />
          </div>
          <div className="flex flex-col max-w-[600px] justify-between">
            
              <h3 className='text-3xl lg:text-4xl font-semibold mb-3'>Eu sou o Silpharny</h3>
              <h4 className='text-lg font-semibold mb-3'>
                Desenvolvedor <span className='text-violet-800'>Front-End</span> localizado no{" "}
                <span>Rio de Janeiro, Brasil</span>
              </h4>
              <p className='text-lg mb-4 pb-6 text-justify border-b-2 border-b-violet-200'>
                Passei meus últimos 15 anos vivendo como atleta profissional
                pelo mundo e junto com isso levando minha paixão pela
                tecnologia. 
                <br />
                <br />
                15 anos depois, eu projeto e desenvolvo serviços para clientes
                especializados na criação de sites, serviços web e lojas online
                elegantes e modernos. Minha paixão é projetar experiências
                digitais de usuário por meio de interações significativas.
                Confira meu portfólio
              </p>
            
            <ul className="flex lg:flex-row flex-col gap-8 mb-5 justify-between">
                <AboutList h3="9+" spanTop="Meses de" spanBotton="Experiência" />
                <AboutList h3="21" spanTop="Clientes" spanBotton="Satisfeitos" />
                <AboutList h3="25+" spanTop="Projetos" spanBotton="Finalizados" />
            </ul>
          </div>
      </div>
    </section>
  );
};

export default About;
