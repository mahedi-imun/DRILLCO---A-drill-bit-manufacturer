import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='lg:px-12 bg-purple-900  '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Blog</Link></li>
                            <li> <Link to='/' className="justify-between">  Portfolio </Link></li>
                            <li><Link to='/' >tools</Link></li>
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-25 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 ">
                                    <li><Link to='/'>Item 3</Link></li>
                                    <li><Link to='/'>Item 3</Link></li>
                                    <li><Link to='/'>Item 3</Link></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">DRILLCO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li><Link to="/">Blog</Link></li>
                        <li ><Link className='' to='/'> Portfolio</Link></li>
                        <li><Link to='/'>tool</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className="dropdown dropdown-end ">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Item 3</Link></li>
                            <li><Link to='/'>Item 3</Link></li>
                            <li><Link to='/'>Item 3</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;