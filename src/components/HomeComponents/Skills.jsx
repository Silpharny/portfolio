import SkillsBlock from "./SkillsBlock"
import TitleSection from "./TitleSection"

import Nextjs from '../../assets/HomePage/next.svg'
import React from '../../assets/HomePage/react.svg'

import Javascript from '../../assets/HomePage/javascript.svg'
import Typescript from '../../assets/HomePage/typescript.svg'

import Css from '../../assets/HomePage/css.svg'
import Tailwindcss from '../../assets/HomePage/Tailwind.svg'

import Html from '../../assets/HomePage/html.svg'

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center relative lg:my-28" id="skills">
        <TitleSection title="Skills" />
        <div className="flex flex-col">
            <div className="max-w-[700px] mb-11">
                <h3 className="text-3xl font-bold text-start">Educação & Skills</h3>
                <p>Mais de 3 anos com experiência em Social Media e tráfego pago e 9 meses desenvolvendo sites modernos para clientes ao redor do mundo.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 my-0 mx-auto mb-20">
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
        </div>
    </section>
  )
}

export default Skills