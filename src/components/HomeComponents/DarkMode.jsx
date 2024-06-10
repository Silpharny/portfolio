import { useState } from "react";

const DarkMode = () => {
  const [changeMode, setChangeMode] = useState(false);

  const darkMode = () => {
    if (changeMode) {
      setChangeMode(!changeMode);
      document.body.classList.remove("dark-theme");
    } else {
      setChangeMode(!changeMode);
      document.body.classList.add("dark-theme");
    }
  };
  return (
    <button
      onClick={darkMode}
      className={
        !changeMode
          ? "fixed right-0 p-2 top-32 bg-gradient-to-l rounded-sm z-50 from-zinc-300"
          : "fixed right-0 p-2 top-32 bg-gradient-to-l rounded-sm z-50 from-zinc-700"
      }
    >
      <i
        className={!changeMode ? "fa fa-moon text-xl" : "fa fa-sun text-xl"}
      ></i>
    </button>
  );
};

export default DarkMode;
