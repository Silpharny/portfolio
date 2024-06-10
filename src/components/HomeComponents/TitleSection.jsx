const TitleSection = (props) => {
  return (
    <>
        <h1 className="text-7xl font-extrabold mb-8 bg-gradient-to-t from-zinc-100 to-zinc-300 opacity-90 inline-block text-transparent bg-clip-text ">{props.title}</h1>
        <h2 className="text-zinc-700 text-4xl font-bold -translate-y-16 before:absolute before:w-20 before:top-10 before:right-0 before:h-1 before:bg-violet-800">{props.title}</h2>
    </>
  )
}

export default TitleSection