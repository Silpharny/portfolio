import { useState, useEffect } from "react"

const Header = () => {

  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if(window.scrollY >= 1) {
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
      setNewClass('hidden')
    }
    
  }

  const links = [
    { id:1, link:"#hero", title:"Home"}, 
    { id:2, link:"#about", title:"Sobre Mim"},
    { id:3, link:"#skills", title:"Skills"}, 
    { id:4, link:"#projects", title:"Projetos"},
    { id:5, link:"#contact", title:"Contato"} 
  ]

  return (
    <header className={header ? "fixed top-0 left-0 right-0 flex flex-col lg:flex-row lg:items-center lg:justify-evenly lg:py-3 z-40 backdrop-blur-[3px] shadow-md transition ease-in-out duration-500 " : "flex flex-col lg:flex-row lg:items-center lg: justify-evenly lg:py-3 z-40 transition ease-in-out duration-1000"}>
      <div className="flex my-2 lg:my-0 md:w-full w-full lg:mb-0 justify-around lg:w-fit">
        <h2 className="text-2xl font-semibold cursor-default">Sil Miranda</h2>
        
        <button className={" lg:hidden "} onClick={toggleMenu}>
          <i className={menuIcon + " text-2xl"}></i>
        </button>
      </div>
      <nav className={newClass + " gap-6 lg:flex-row flex-col"}>
            {links.map(item =>
              <a onClick={toggleMenu} key={item.id} className=" hover:text-blue-600 font-medium text-center p-4 " href={item.link}>{item.title}</a>  
              
            )}
      </nav>      

    </header>
  )
}

export default Header