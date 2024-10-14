import { IoIosStarOutline } from "react-icons/io";
import { PiChair } from "react-icons/pi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { RiArmchairLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { LuLampDesk } from "react-icons/lu";
import "./IconNavBar.css"

export const IconNavBar = () => {
  return (
    <nav className="navbar">
      <div className="icon-container">
        <IoIosStarOutline className="icons"/>
        <p>Popular</p>
      </div>
      <div className="icon-container">
        <PiChair className="icons"/>
        <p>Chair</p>
      </div>
      <div className="icon-container">
        <MdOutlineTableRestaurant className="icons"/>
        <p>Table</p>
      </div>
      <div className="icon-container">
        <RiArmchairLine className="icons"/>
        <p>Armchair</p>
      </div>
      <div className="icon-container">
        <IoBedOutline className="icons"/>
        <p>Bed</p>
      </div>
      <div className="icon-container">
        <LuLampDesk className="icons"/>
        <p>Lamp</p>
      </div>
    </nav>
  )
}