import React from 'react'
import Sidebar from './Sidebar';
import Table from 'react-bootstrap/Table';
import { data } from './Data';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Order() {
    return (
        <>
            <div className='main'>
                <Sidebar />
                <div className='orders'>
                    <h1>Orders</h1>
                    <div className="orders-table">
                        {
                            data?.length > 0 ? (
                                <>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Sr</th>
                                                <th>Product Name</th>
                                                <th>Product Type</th>
                                                <th>Product Series</th>
                                                <th>Order Status</th>
                                                <th>Ordered At</th>
                                                <th>View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data?.map((product, idx) => {
                                                    return (
                                                        <>
                                                            <tr key={idx}>
                                                                <td>{idx + 1}</td>
                                                                <td>{product.name}</td>
                                                                <td>{product.type}</td>
                                                                <td>{product.series}</td>
                                                                <td>{product.status}</td>
                                                                <td>{product.ordered_at}</td>
                                                                <td><Link to={`/order/${product._id}`}><Button variant="primary">View Order</Button></Link></td>
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
            </div>
        </>
    )
}

export default Order