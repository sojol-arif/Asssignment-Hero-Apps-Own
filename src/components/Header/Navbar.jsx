import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import logo from "../../assets/logo.png";
import contribute from "../../assets/contribute.png";

const Header = () => {
    const Links = <div className='lg:flex gap-4 font-semibold text-[16px]'>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/apps"
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
                Apps
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/installation"
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
                Installation
            </NavLink>
        </li>
    </div>;

    return (
        <div className='navbar bg-base-100 shadow-sm px-10 lg:px-20'>
            <div className="max-w-[1440px] mx-auto w-full">
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {Links}
                            </ul>
                        </div>
                        <Link to={"/"}><img src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={"https://github.com/sojol-arif?tab=repositories"} className='flex items-center bg-linear-[145deg,#632EE3_0%,#9F62F2_100%] px-4 py-3 rounded-[4px] font-semibold gap-3 text-[#fff]'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_1_698)">
                        <path d="M10 0.416687C4.475 0.416687 0 4.81669 0 10.2434C0 14.5859 2.865 18.2684 6.8375 19.5667C7.3375 19.6592 7.52083 19.355 7.52083 19.0942C7.52083 18.8609 7.5125 18.2425 7.50833 17.4234C4.72667 18.0159 4.14 16.105 4.14 16.105C3.685 14.9709 3.0275 14.6675 3.0275 14.6675C2.12167 14.0584 3.0975 14.0709 3.0975 14.0709C4.10167 14.1392 4.62917 15.0834 4.62917 15.0834C5.52083 16.5859 6.97 16.1517 7.54167 15.9009C7.63167 15.265 7.88917 14.8325 8.175 14.5867C5.95417 14.3409 3.62 13.4959 3.62 9.73085C3.62 8.65835 4.0075 7.78169 4.64917 7.09419C4.53667 6.84585 4.19917 5.84669 4.73667 4.49335C4.73667 4.49335 5.57417 4.23002 7.48667 5.50085C8.28667 5.28252 9.13667 5.17419 9.98667 5.16919C10.8367 5.17419 11.6867 5.28252 12.4867 5.50085C14.3867 4.23002 15.2242 4.49335 15.2242 4.49335C15.7617 5.84669 15.4242 6.84585 15.3242 7.09419C15.9617 7.78169 16.3492 8.65835 16.3492 9.73085C16.3492 13.5059 14.0117 14.3367 11.7867 14.5784C12.1367 14.8734 12.4617 15.4759 12.4617 16.3967C12.4617 17.7117 12.4492 18.7684 12.4492 19.0875C12.4492 19.345 12.6242 19.6525 13.1367 19.5542C17.1375 18.2642 20 14.5792 20 10.2434C20 4.81669 15.5225 0.416687 10 0.416687Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_698">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg> Contribute</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;