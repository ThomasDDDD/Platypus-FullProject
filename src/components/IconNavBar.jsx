import { Link } from "react-router-dom";
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
      <Link to="/category/esszimmer">
        <div className="icon-container">
          <IoIosStarOutline className="icons"/>
          <p>Esszimmer</p>
        </div>
      </Link>
      <Link to="/category/küche">
        <div className="icon-container">
          <PiChair className="icons"/>
          <p>Küche</p>
        </div>
      </Link>
      <Link to="/category/schlafzimmer">
        <div className="icon-container">
          <MdOutlineTableRestaurant className="icons"/>
          <p>Schlafzimmer</p>
        </div>
      </Link>
      <Link to="/category/kinderzimmer">
        <div className="icon-container">
          <RiArmchairLine className="icons"/>
          <p>Kinderzimmer</p>
        </div>
      </Link>
      <Link to="/category/babyzimmer">
        <div className="icon-container">
          <IoBedOutline className="icons"/>
          <p>Babyzimmer</p>
        </div>
      </Link>
      <Link to="/category/flur">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Flur</p>
        </div>
      </Link>
      <Link to="/category/homeoffice">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Homeoffice</p>
        </div>
      </Link>
      <Link to="/category/accessoires">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Accessoires</p>
        </div>
      </Link>
      <Link to="/category/wohnzimmer">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Wohnzimmer</p>
        </div>
      </Link>
      <Link to="/category/keller">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Keller</p>
        </div>
      </Link>
      <Link to="/category/garten">
        <div className="icon-container">
          <LuLampDesk className="icons"/>
          <p>Garten</p>
        </div>
      </Link>
    </nav>
  )
}