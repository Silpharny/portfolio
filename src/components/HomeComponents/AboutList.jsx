const AboutList = (props) => {
  return (
    <li className="flex justify-center items-center gap-4">
      <h3 className="text-4xl font-bold">{props.h3}</h3>
      <span className="text-zinc-700 text-lg">{props.spanTop}<br/>{props.spanBotton}</span>
    </li>
  );
};

export default AboutList;
