import { Link } from "react-router-dom";
import { useBelanja } from "../context/BelanjaContext";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const { searchInputHandler } = useBelanja();
  return (
    <>
      <header className="bg-slate-900 backdrop-blur-sm w-full py-4 px-8 shadow-md flex justify-center">
        {/* <div className="text-xl font-bold text-slate-200">LOGO</div> */}
        <div className="flex space-x-8 text-slate-200">
          <NavLink
            to={"/"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg ${isActive ? "underline" : ""}`
            }
          >
            SSH
          </NavLink>
          <NavLink
            to={"/SBU"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg ${isActive ? "underline" : ""}`
            }
          >
            SBU
          </NavLink>
        </div>
      </header>
      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
