const SkillsBlock = (props) => {
  return (
    <div>
      <h4 className="mb-5">
        <label className="bg-violet-500 text-zinc-50 text-lg font-normal py-1 px-3 rounded">
          {props.label}
        </label>
      </h4>
      <ul>
        <li className="flex items-center justify-between gap-3 hover:shadow-lg shadow-md border-b-violet-400 border-2 border-zinc-50 max-w-[400px] p-5 mt-4 rounded-md transition-all hover:scale-105 ease-in-out 3s">
          <div>
            <span className="mb-1">{props.year}</span>
            <p className={ props.label=="Skills" ? "w-28" : 'text-base font-extralight'}>
              <span className="font-medium">{props.title}</span> {props.span}
            </p>
          </div>
          <div className={props.img ? "flex gap-3" : 'hidden'}>
            <img className="w-14 hover:w-[60px] transition-all" src={props.img} />
            <img className="w-14 hover:w-[60px] transition-all" src={props.secImg} />
          </div>
        </li>
        <li className="flex items-center justify-between gap-3 hover:shadow-lg shadow-md border-b-violet-400 border-2 border-zinc-50 max-w-[400px] p-5 mt-4 rounded-md transition-all hover:scale-105 ease-in-out 3s">
          <div>
            <span className="mb-1">{props.secondYear}</span>
            <p className="text-base font-extralight">
              <span className="font-medium">{props.secondTitle}</span> {props.secondSpan}
            </p>
          </div>
          <div className={props.img ? "flex gap-3" : 'hidden'}>
            <img className="w-14 hover:w-[60px] transition-all" src={props.secondImg} />
            <img className="w-14 hover:w-[60px] transition-all" src={props.secondSecImg} />
          </div>
        </li>
        <li className="flex items-center justify-between gap-3 hover:shadow-lg shadow-md border-b-violet-400 border-2 border-zinc-50 max-w-[400px] p-5 mt-4 rounded-md transition-all hover:scale-105 ease-in-out 3s">
          <div>
            <span className="mb-1">{props.thirdYear}</span>
            <p className="text-base font-extralight">
              <span className="font-medium">{props.thirdTitle}</span> {props.thirdSpan}
            </p>
          </div>
          <div className={props.img ? "flex gap-3" : 'hidden'}>
            <img className="w-14 hover:w-[60px] transition-all" src={props.thirdImg} />
            <img className="w-14 hover:w-[60px] transition-all" src={props.thirdSecImg} />
          </div>
        </li>
        <li className={props.label=="Skills" ? "flex items-center justify-between gap-3 hover:shadow-lg shadow-md border-b-violet-400 border-2 border-zinc-50 max-w-[400px] p-5 mt-4 rounded-md transition-all hover:scale-105 ease-in-out 3s" : "visible"}>
          <div>
            <span className="mb-1">{props.fourthYear}</span>
            <p className="text-base font-extralight">
              <span className="font-medium">{props.fourthTitle}</span> {props.fourthSpan}
            </p>
          </div>
          <div className={props.img ? "flex gap-3" : 'hidden'}>
            <img className="w-14 hover:w-[60px] transition-all" src={props.fourthImg} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SkillsBlock;
