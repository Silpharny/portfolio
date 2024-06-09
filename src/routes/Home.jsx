import { useState } from "react";
import Hero from "../components/HomeComponents/Hero";

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
    <main>
      <button onClick={darkMode} className={"fixed right-0 p-2 top-32 bg-gradient-to-l rounded-sm z-50 "+ newClass}>
        <i className={changeIcon + " text-xl"}></i>
      </button>

      
      <Hero />

    </main>
  );
};

export default Home;
