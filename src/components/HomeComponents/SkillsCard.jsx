const SkillsCard = (props) => {
  return (
    <div className="rounded shadow-sm hover:shadow-md shadow-violet-300 transition-all hover:scale-105 border-b-violet-400 border-b-2 hover:border-b-4 p-6  w-[350px] h-[340px]">
      <div className="leading-8">
        <h3 className="text-2xl font-bold">{props.work}</h3>
        <h5 className="font-medium italic">{props.workMode}</h5>
        <span className="text-zinc-600">{props.year}</span>
      </div>
      <div className="w-full h-[2px] bg-violet-200 my-3 mr-5"></div>
      <h4 className="bg-violet-500 p-1 text-zinc-50  rounded my-4 w-fit">{props.company}</h4>
      <p className="text-justify">{props.text}</p>
    </div>
  );
};

export default SkillsCard;
