const Footer = () => {
  const links = [
    { id: 1, title: "Sobre Mim", link: "#about" },
    { id: 2, title: "Skills", link: "#skills" },
    { id: 3, title: "Projetos", link: "#projects" },
    { id: 4, title: "Contato", link: "#contact" },
  ];

  return (
    <footer className="flex flex-col lg:py-10 text-center lg:justify-evenly bg-violet-900 text-zinc-50">
      <div className="flex flex-col lg:flex-row justify-evenly">
      <div className="text-center my-4">
        <h2 className="text-3xl font-semibold mb-1 bg-gradient-to-t from-violet-900 to-violet-200 opacity-80 text-transparent bg-clip-text">Silpharny</h2>
        <p className="font-light">Front-End Developer</p>
      </div>

      <div className="text-center mt-4 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Navegue até</h2>
        <ul className="flex gap-4 justify-center">
          {links.map(item =>
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          )}
        </ul>
      </div>

      <div className="text-center my-4">
        <h2 className="text-xl font-semibold">Siga-me</h2>
        <ul className="flex gap-4 justify-center">
            <a className="text-3xl" href="https://www.linkedin.com/in/silpharny/" target="_blank">
              <i className=" fa-brands fa-linkedin"></i>
            </a>
            <a className="text-3xl" href="https://github.com/Silpharny" target="_blank">
              <i className=" fa-brands fa-github"></i>
            </a>
            <a className="text-3xl" href="https://instagram.com/silpharny" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </ul>
      </div>
      </div>
      <p className="text-sm py-4 opacity-70">© 2024 by Sil Miranda. Todos os direitos reservados.</p>
    </footer>
  );
};
export default Footer;
