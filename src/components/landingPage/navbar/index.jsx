import { NavLink } from "react-router-dom"
import { Datum, Logo } from "../../../assets"

export const Navbar = () => {
  return (
    <nav className="bg-[#f4f4f4] px-[100px] flex gap-[251px] h-[112px] ">
      <figure className="flex gap-1 items-center justify-center">
        <img src={Logo} className="size-9" alt="logo" />
        <img src={Datum} className="h-6" alt="brand name" />
      </figure>
      <ul className="col-span-2 flex items-center text-lg font-bold gap-10">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
        <li>
          <NavLink>Services</NavLink>
        </li>
      </ul>
    </nav>
  )
}
