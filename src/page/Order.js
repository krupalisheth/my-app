import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Table from 'react-bootstrap/Table';
import { salesData } from './Data';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Orders.css';

function Order() {
    const [orders, setOrders] = useState([]);
    const [selected, setSelected] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);
    const [date, setDate] = useState('');
    const [id, setId] = useState('');
    const [status, setStatus] = useState('Success');

    const handleClick = (element) => {
        setSelected(element.items);
        setDate(element.date);
        setId(element.id);
        setTotalAmt(element.total);
        setStatus(element.status);
    }

    const closeBar = () => {
        setSelected([]);
    }

    useEffect(() => {
        let orders = JSON.parse(localStorage.getItem('data'));
        // console.log(JSON.parse(orders));
        // setOrders(orders)
        // setSelected(salesData);
    }, [orders]);
    return (
        <>
            <div className='main'>
                <Sidebar />
                <div className='orders'>
                    <div style={{ width: '65%' }}>
                        <h1>Orders</h1>
                        <div className="orders-table">
                            {
                                orders?.length > 0 ? (
                                    <>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Sr</th>
                                                    <th>Order Id</th>
                                                    <th>Ordered At</th>
                                                    <th>Order Status</th>
                                                    <th>Total Amount</th>
                                                    <th>View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orders?.map((product, idx) => {
                                                        return (
                                                            <>
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}</td>
                                                                    <td>#{product.id}</td>
                                                                    <td>{product.date}</td>
                                                                    <td>{product.status}</td>
                                                                    <td>{product.total}</td>
                                                                    <td><Button onClick={() => handleClick(product)} variant="primary">View Order</Button></td>
                                                                </tr>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ fontSize: "30px", fontWeight: "500" }}>No Data Found</div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    {
                        selected?.length > 0 ?
                            <div className='order-sidebar'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3>Order - # {id}</h3> <h2 onClick={() => closeBar()} style={{ color: 'red', marginRight: '10px', cursor: 'pointer' }}>x</h2></div>
                                <h4>Order At - {date}</h4>
                                <h6 style={{ color: 'green' }}>{status}</h6>
                                <div style={{ minHeight: '100px' }}>
                                    <div className='selected-item'>
                                        <p>Name</p>
                                        <p>QTY.</p>
                                        <p>Price</p>
                                        <p>Amt.</p>
                                    </div>
                                    {selected.map((element, idx) => {
                                        return (
                                            <>
                                                <div className='selected-item'>
                                                    <p>{element.name}</p>
                                                    <p>{element.qty}</p>
                                                    <p>{element.price}</p>
                                                    <p>{element.price * element.qty}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div>Rs.{totalAmt}</div>
                            </div>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Order