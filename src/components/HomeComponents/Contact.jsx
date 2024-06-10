import TitleSection from "./TitleSection";

const Contact = () => {
  const contactItems = [
    {
      id: 1,
      icon: "fas fa-phone",
      title: "Telefone",
      text: "+55 (21) 99964-2619",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      title: "Email",
      text: "silpharny@gmail.com",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      title: "Endereço",
      text: "Rio de Janeiro, Brasil 📍",
    },
  ];

  return (
    <section className="flex flex-col items-center mb-32" id="contact">
      <TitleSection title="Contato" />

      <ul className="flex gap-32">
        {contactItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-center gap-5 w-80 bg-white shadow-md p-8 border-b-2 border-b-violet-300 hover:scale-105"
          >
            <i className={item.icon + " text-violet-800 text-5xl"}></i>

            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{item.title}</h3>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
