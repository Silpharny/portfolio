import { useState, useEffect } from "react"

const Header = () => {

  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if(window.scrollY >= 10) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return (() => {
      window.addEventListener('scroll', scrollHeader)
    })
  })

  return (
    <header className={header ? "flex justify-evenly fixed py-3 z-50 w-full top-0 left-0 backdrop-blur-[1px] shadow-md transition ease-in-out duration-500" : "transition ease-in-out duration-500 flex justify-evenly fixed bg-white py-3 z-50 top-0 left-0 w-full" }>
      <h2 className="text-2xl font-semibold cursor-default">Sil Miranda</h2>
      <nav id="desktop">
        <ul className="hidden lg:flex gap-16">
          <a className="hover:text-blue-600 font-medium" href="#hero"><li>Home</li></a>
          <a className="hover:text-blue-600 font-medium" href="#about"><li>Sobre Mim</li></a>
          <a className="hover:text-blue-600 font-medium" href="#skills"><li>Skills</li></a>
          <a className="hover:text-blue-600 font-medium" href="#services"><li>Serviços</li></a>
          <a className="hover:text-blue-600 font-medium" href="#projects"><li>Projetos</li></a>
          <a className="hover:text-blue-600 font-medium" href="#contact"><li>Contact</li></a>
        </ul>
      </nav>
    
    </header>
  )
}

export default Header