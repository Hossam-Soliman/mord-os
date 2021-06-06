import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//svg images
import HomeImage from "../svgImages/HomeImage";
import MediaImage from "../svgImages/MediaImage";
import NewsImage from "../svgImages/NewsImage";
import LogoutImage from "../svgImages/LogoutImage";
//actions
import { setIsLoggedInFalse } from "../../store/app/AppActions";

const SideNav = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setIsLoggedInFalse());
  };

  return (
    <div className='jw-drawer'>
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>
                <HomeImage />
                Home
              </Link>
            </li>
            <li>
              <Link to='/news'>
                <NewsImage />
                News
              </Link>
            </li>
            <li>
              <Link to='/media'>
                <MediaImage />
                Media
              </Link>
            </li>
          </div>
          <li onClick={handleLogOut} className='last-item'>
            <Link to='/'>
              <LogoutImage />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
