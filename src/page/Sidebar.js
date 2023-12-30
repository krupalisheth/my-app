import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className='sidebar'>
                <div className='logo'>
                    <img src=''></img>
                </div>
                <div className='navlink'>
                    <Link className='link' to={'/'}>Dashboard</Link>
                    <Link className='link' to={'/orders'}>Orders</Link>
                    <Link className='link' to={'/customers'}>Customers</Link>
                    <Link className='link' to={'/reports'}>Reports</Link>
                    <Link className='link' to={'/sales'}>Sales</Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar