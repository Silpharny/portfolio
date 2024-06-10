import Hero from "../components/HomeComponents/Hero";
import About from "../components/HomeComponents/About";
import Skills from "../components/HomeComponents/Skills";
import Contact from "../components/HomeComponents/Contact";
import DarkMode from "../components/HomeComponents/DarkMode";

const Home = () => {
  return (
    <main className="mt-16 lg:mt-24">
      <DarkMode />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
