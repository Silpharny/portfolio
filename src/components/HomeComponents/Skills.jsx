import SkillsBlock from "./SkillsBlock"
import TitleSection from "./TitleSection"

import Nextjs from '../../assets/HomePage/next.svg'
import React from '../../assets/HomePage/react.svg'

import Javascript from '../../assets/HomePage/javascript.svg'
import Typescript from '../../assets/HomePage/typescript.svg'

import Css from '../../assets/HomePage/css.svg'
import Tailwindcss from '../../assets/HomePage/Tailwind.svg'

import Html from '../../assets/HomePage/html.svg'
import SkillsCard from "./SkillsCard"

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center relative lg:my-28 mb-14 lg:mb-0 p-4 lg:p-0" id="skills">
        <TitleSection title="Skills" />
        <div className="flex flex-col">
            <div className="lg:max-w-[700px] self-center lg:self-start mb-11">
                <h3 className="text-xl lg:text-3xl font-bold text-start">Educação & Skills</h3>
                <p className="w-[330px] lg:w-full text-justify lg:text-left">Mais de 3 anos com experiência em Social Media e tráfego pago e 9 meses desenvolvendo sites modernos para clientes ao redor do mundo.</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 flex flex-col gap-5 my-0 mx-auto lg:mb-20">
                <SkillsBlock
                    label="Educação"
                    
                    year="2012-2016"
                    title="Certificação Adobe"
                    span="- Seven CG"

                    secondYear="2020-2023"
                    secondTitle="Tráfego Pago"
                    secondSpan="- Comunidade Pedro Sobral"


                    thirdYear="2024"
                    thirdTitle="TI 360 Tech"
                    thirdSpan="- Weslley Borges"
                />
                <SkillsBlock
                    label="Skills"
                    
                    title="Bibliotecas & Frameworks"
                    img={Nextjs}
                    secImg={React}

                    secondTitle="Linguagem de programação"
                    secondImg={Javascript}
                    secondSecImg={Typescript}


                    thirdTitle="Design"
                    thirdImg={Css}
                    thirdSecImg={Tailwindcss}

                    fourthTitle="Linguagem de marcação"
                    fourthImg={Html}
                />
                <SkillsBlock
                    label="Habilidades"
                    
                    title="Trabalho em equipe"
                    span="- Como atleta aprendi a compreender a necessidade de manter uma boa relação entre a minha equipe para que cheguemos ao nosso objetivo"

                    secondTitle="Aberto a novas ideias"
                    secondSpan="- Busco absorver o máximo de ideias de outras pessoas para que eu forme um pensamento sobre algo, isso me ajuda a evitar erros que outras pessoas já cometeram"

                    thirdTitle="Aprendizado rápido e eficiente"
                    thirdSpan="- Busco aprender o que realmente é crucial para resolver os problemas(80/20), sendo assim, a cada novo desafio eu aprimoro mais minhas habilidades"
                />
            </div>
            <div className="my-4">
                <h3 className="text-2xl lg:text-3xl mt-10 lg:mt-0 font-bold text-start">Trabalhos & Experiências</h3>
                <div className="max-w-full lg:mt-10 mt-4 flex flex-col lg:flex-row gap-20">
                    <SkillsCard 
                        work="Marketing"
                        workMode="Remoto"
                        year="2020-2021"
                        company="Drogaria Favorita"
                        text="Responsável pelo departamento de marketing da Empresa. (Social Media / Tráfego Pago)"
                    />
                    <SkillsCard 
                        work="Web design"
                        workMode="Remoto"
                        year="2022-2024"
                        company="Freelancer"
                        text="Responsável pela criação da identidade visual de marcas até a concepção da Landing Page"
                    />
                    <SkillsCard 
                        work="E-commerce"
                        workMode="Remoto"
                        year="2024"
                        company="Vanilla Eyewear"
                        text="Criação completo do E-commerce através da Shopify. Criação da identidade visual da marca até a criação do site e manunteção"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills