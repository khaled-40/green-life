import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
import { CiLogout } from "react-icons/ci";
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {
     const { user, signOutUser } = use(AuthContext)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/plants'}>Plants</NavLink></li>
        <li><NavLink to={'/myProfile'}>My Profile</NavLink></li>
    </>
    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user ? (
                        <>
                            <Link to={'/login'} className='btn btn-primary'>LogIn</Link>
                            <Link to={'/register'} className='btn ml-2 btn-primary'>Register</Link>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end relative z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co.com/nxCCrZ9/TVS-Apache-RTR-160-copy1-cf4fd92da6.webp"}
                                        alt="user avatar"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                
                                <li><a onClick={handleLogout}><CiLogout />Logout</a></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;