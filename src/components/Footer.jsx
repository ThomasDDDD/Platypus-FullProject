import { IoIosHome } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <IoIosHome className="icons-footer"/>
      <CiBookmark className="icons-footer"/>
      <IoCartOutline className="icons-footer"/>
      <FaRegEnvelope className="icons-footer"/>
      <CiUser className="icons-footer"/>
    </footer>
  )
}