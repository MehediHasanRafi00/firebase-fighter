import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";


const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-3 ">
          <li>
            <MyLink  classname='btn btn-ghost' to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink classname='btn btn-ghost' to={"/about-us"}>About US</MyLink>
          </li>
          <li>
            <MyLink classname='btn btn-ghost' to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold btn cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;