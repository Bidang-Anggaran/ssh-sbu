import { useKode } from "../context/BelanjaContext";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const { searchInputHandler } = useKode();

  const tabLink = (title, route) => {
    return (
      <NavLink
        to={route}
        onClick={() => {
          searchInputHandler("");
        }}
        className={({ isActive }) =>
          `font-bold text-lg px-4 py-2 ${
            isActive ? "bg-yellow-200 rounded-lg text-slate-900 " : ""
          }`
        }
      >
        {title}
      </NavLink>
    );
  };

  return (
    <>
      <header className="bg-slate-900 backdrop-blur-sm w-full py-4 px-8 shadow-md flex justify-center">
        <div className="flex space-x-8 text-slate-200">

          {tabLink("SSH", "/")}
          {tabLink("SBU", "/SBU")}
          {tabLink("HSPK", "/HSPK")}
          {tabLink("ASB", "/ASB")}
        </div>
      </header>
      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
