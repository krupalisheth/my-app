import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/name1.png';
import './Sidebar.css';

function Sidebar() {
    const { pathname } = useLocation();
    const [navActive, setNavActive] = useState(1);

    useEffect(() => {
        if (pathname === '/') {
            setNavActive(1);
        } else if (pathname === '/sales') {
            setNavActive(2);
        } else if (pathname === '/orders') {
            setNavActive(3);
        }
    }, [pathname])
    return (
        <>
            <div className='sidebar'>
                <div className='logo' style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <img src={logo} alt='logo' style={{ width: "160px", height: "105px", borderBottom: "2px solid #fff" }}></img>
                </div>
                <div className='navlink'>
                    <Link className='link' id={navActive === 2 ? 'nav-active' : ''} to={'/sales'}>Sales</Link>
                    <Link className='link' id={navActive === 3 ? 'nav-active' : ''} to={'/orders'}>Orders</Link>
                    <Link className='link' id={navActive === 1 ? 'nav-active' : ''} to={'/'}>Reports</Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar