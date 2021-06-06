import React from "react";
import { Link } from "react-router-dom";
//svg images
import HomeImage from "../svgImages/HomeImage";
import MediaImage from "../svgImages/MediaImage";
import NewsImage from "../svgImages/NewsImage";

const SideNav = () => {
  return (
    <div className='jw-drawer'>
      <nav>
        <ul>
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
          {/* <li>
            <Link to='/media'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z' />
              </svg>
              Media
            </Link>
          </li>
          <li>
            <a href='https://www.seotechman.com/p/berita-terbaru.html'>
              <svg style={{ width: 42, height: 42 }}>
                <path
                  d='M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z'
                  fill='#09f'></path>
              </svg>{" "}
              Berita Terbaru
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/bogging.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z'
                  fill='#F57F17'></path>
              </svg>{" "}
              Blogging
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/css.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z'
                  fill='#4CAF50'></path>
              </svg>{" "}
              Css
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/digital.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z'
                  fill='#E91E63'></path>
              </svg>{" "}
              Digital
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/hosting.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z'
                  fill='#FFC107'></path>
              </svg>{" "}
              Hosting
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/info-menarik.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                  fill='#A6E8E3'></path>
              </svg>{" "}
              Info Menarik
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/media.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z'
                  fill='#F8BBD0'></path>
              </svg>{" "}
              Media
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/seo.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
                  fill='#9AE69C'></path>
              </svg>{" "}
              Seo
            </a>
          </li>

          <li>
            <a href='https://www.seotechman.com/p/tips.html'>
              <svg style={{ width: 42, height: 42 }} viewBox='0 0 24 24'>
                <path
                  d='M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z'
                  fill='#FF5722'></path>
              </svg>{" "}
              Tips
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
