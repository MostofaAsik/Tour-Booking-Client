import { Link, NavLink } from "react-router-dom";

const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]

const Header = () => {
    const user = false;
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks.map((nav, i) => (
                                <li key={i}  >
                                    <Link to={nav.path}>
                                        {nav.display}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Tour Booking</a>
            </div>
            <div className="navbar-center hidden md:flex md:gap-3">
                <ul className="menu menu-horizontal px-1 md:flex md:gap-3">
                    {
                        navLinks.map((nav, i) => (
                            <li key={i}  >
                                <NavLink
                                    to={nav.path}
                                    className={({ isActive }) => isActive ? 'bg-red-400' : ''}
                                >
                                    {nav.display}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div> :
                        <Link to='signin'>
                            <button className="btn">SignIn</button>
                        </Link>

                }

            </div>
        </div>
    );
};

export default Header;