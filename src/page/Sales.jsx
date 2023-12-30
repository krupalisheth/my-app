import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { salesData } from './Data';
import Table from 'react-bootstrap/Table';
import './Sales.css';

const Sales = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAmt = salesData.reduce((prev, item) => {
            return prev + item.price * item.qty;
        }, 0)
        setTotal(totalAmt);
    }, [salesData])
    return (
        <>
            <div className='main'>
                <Sidebar />
                <div className="sales">
                    <div className="sales-header">
                        <div>
                            <h4>Customer Name</h4>
                            <p>Krupali Sheth</p>
                        </div>
                        <div>
                            <h4>Customer Mobile</h4>
                            <p>1234567890</p>
                        </div>
                    </div>
                    {
                        salesData?.length > 0 ? (
                            <>
                                <div>
                                    <h2 style={{ textDecoration: "underline" }}>Sales Data</h2>
                                    <div className="sales-table">
                                        <Table striped bordered hover style={{ textAlign: "center" }}>
                                            <thead>
                                                <tr style={{ backgroundColor: "#000" }}>
                                                    <th>Sr</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    salesData?.map((product, idx) => {
                                                        return (
                                                            <>
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}</td>
                                                                    <td>{product.name}</td>
                                                                    <td>{product.price}</td>
                                                                    <td>{product.qty}</td>
                                                                    <td>{product.price * product.qty}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>

                                    </div>
                                    <div className="sales-footer">
                                        <h3>Total: {total}</h3>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ fontSize: "30px", fontWeight: "500", marginTop: "20px" }}>No Sales Data Found</div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Sales