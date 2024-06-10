import { useState } from "react";
import Hero from "../components/HomeComponents/Hero";
import About from "../components/HomeComponents/About";
import Skills from "../components/HomeComponents/Skills";

const Home = () => {
  
  const [changeMode, setChangeMode] = useState(false)

  const [changeIcon, setChangeIcon] = useState("fas fa-moon")
  const [newClass, setNewClass] = useState("from-zinc-200")
  
  const darkMode = () => {

    if(changeMode) {
      setChangeMode(!changeMode)
      setChangeIcon("fas fa-sun")
      setNewClass("from-zinc-200")
      document.body.classList.remove('dark-theme')
    } else {
      setChangeIcon("fas fa-moon")
      setChangeMode(!changeMode)
      setNewClass("from-zinc-600")
      document.body.classList.add('dark-theme')
    }

    console.log(changeMode);

  }

  return (
    <main className="mt-16 lg:mt-24">
      <button onClick={darkMode} className={"fixed right-0 p-2 top-32 bg-gradient-to-l rounded-sm z-50 "+ newClass}>
        <i className={changeIcon + " text-xl"}></i>
      </button>
      
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default Home;
