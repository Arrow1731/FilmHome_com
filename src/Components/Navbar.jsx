import React from "react";
import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.svg";
import SearchIcon from "../assets/search.svg";

function Navigation() {
  return (
    <div className="text-[#fff] header_nav_img">
      <nav className="container py-[20px] flex justify-between items-center">
        <NavLink exact to="/" activeClassName="active">
          Logo
        </NavLink>
        <div className="max-w-[510px] w-full bg-[#0F0F0F] rounded-[10px] px-[34px] py-[24px]">
          <center>
            <span className="flex gap-[30px] items-center">
              <NavLink className='font-Manrope font-regular text-[18px] text-[#fff]' to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink className='font-Manrope font-regular text-[18px] text-[#fff]' to="/Movies_Shows" activeClassName="active">
                Movies & Series
              </NavLink>
              <NavLink className='font-Manrope font-regular text-[18px] text-[#fff]' to="/Support" activeClassName="active">
                Support
              </NavLink>
              <NavLink className='font-Manrope font-regular text-[18px] text-[#fff]' to="/Subscriptions" activeClassName="active">
                Subscriptions
              </NavLink>
            </span>
          </center>
        </div>
        <div className="flex gap-[20px] items-center">
          <NavLink className='font-lato font-bold text-[#424551]' to="/Login" activeClassName="active">
            <img className="w-[30px]" src={userLogo} alt="Img none" />
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/" activeClassName="active">
            <img className="w-[30px]" src={SearchIcon} alt="Img none" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;