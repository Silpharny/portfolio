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
  },[])

  const [isOpen, setIsOpen] = useState(false)
  const [newClass, setNewClass] = useState('hidden lg:flex')
  const [menuIcon, setMenuIcon] = useState('fa-solid fa-bars')

  const toggleMenu = () => {
    if(!isOpen) {
      setIsOpen(!isOpen)
      setMenuIcon('fa-solid fa-xmark')
      setNewClass('flex')
    } else {
      setIsOpen(!isOpen)
      setMenuIcon('fa-solid fa-bars')
      setNewClass('hidden lg:flex')
    }
    console.log(isOpen);
  }

  return (
    <header className={header ? "flex justify-evenly fixed py-3 z-40 w-full items-center top-0 left-0 backdrop-blur-[3px] shadow-md transition ease-in-out duration-500" : "transition ease-in-out duration-500 flex justify-evenly fixed py-3 items-center z-40 top-0 left-0 w-full lg:flex-row flex-col"}>
      <div className="flex mb-10 md:w-full w-full lg:mb-0 justify-around lg:w-fit">
        <h2 className="text-2xl font-semibold cursor-default">Sil Miranda</h2>
        
        <button className={" lg:hidden "} onClick={toggleMenu}>
          <i className={menuIcon + " text-2xl"}></i>
        </button>
      </div>
      <nav>
          <ul>
            <li className={newClass + " gap-6 lg:flex-row flex-col"}>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#hero">Home</a>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#about">Sobre Mim</a>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#skills">Skills</a>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#services">Serviços</a>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#projects">Projetos</a>
              <a className="hover:text-blue-600 font-medium text-center p-2" href="#contact">Contact</a>
            </li>
          </ul>
      </nav>      

    </header>
  )
}

export default Header