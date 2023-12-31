import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { salesData } from './Data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import './Sales.css';
import image from '../images/bur1.jpeg'

const Sales = () => {
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    const [totalAmt, settotalAmt] = useState(0);

    const handleClick = (element) => {
        const findItemIndex = selected.findIndex(item => {
            return item._id === element._id;
        })

        if (findItemIndex > -1) {
            selected[findItemIndex].qty += 1;
            setSelected(selected);
        } else {
            setSelected([...selected, JSON.parse(JSON.stringify(element))]);
        }
        getTotalPrice(element, true);
    }

    const getTotalPrice = (element, type) => {
        let total = totalAmt;
        if (type) {
            total += Number(element.price);
        }
        else {
            total -= Number(element.price);
        }
        settotalAmt(total);
    }

    const handleProceed = () => {
        let data = [];
        data = JSON.parse(localStorage.getItem('data'));
        let id = 1;
        let obj = [];
        id = data ? data.length + 1 : 1;
        obj = {
            id,
            date: new Date(),
            items: JSON.parse(JSON.stringify(selected)),
            total: totalAmt,
            status: 'Success'
        };
        data = data ? ([...data, JSON.parse(JSON.stringify(obj))]) : ([(JSON.parse(JSON.stringify(obj)))]);
        setSelected([]);
        settotalAmt(0);
        setTimeout(function () {
            alert("Order Saved Successfully");
        }, 500);
        localStorage.setItem('data', JSON.stringify(data));
    }
    const handleDelete = (_id) => {
        const findItemIndex = selected.findIndex(item => {
            return item._id === _id;
        })
        if (findItemIndex > -1 && selected[findItemIndex].qty > 1) {
            selected[findItemIndex].qty -= 1;
            setSelected(selected);
        } else {
            const reducedData = selected.filter(item => {
                return item._id !== _id
            })
            setSelected(reducedData);
        }
        getTotalPrice(selected[findItemIndex], false);
    }
    useEffect(() => {
        const totalAmt = salesData.reduce((prev, item) => {
            return prev + item.price * item.qty;
        }, 0)
        setTotal(totalAmt);

    }, [salesData, selected])
    return (
        <>
            <div className='main'>
                <Sidebar />
                <div className="sales">
                    {
                        salesData?.length > 0 ? (
                            <>
                                <div className='card-container'>
                                    {salesData?.map((product, idx) => {
                                        return (
                                            <>
                                                <Card key={idx} className='cards' style={{ width: '18rem' }}>
                                                    <Card.Img className='card-img' variant="top" src={require(`../images/${product.image}`)} />
                                                    <Card.Body>
                                                        <Card.Title>{product.name}</Card.Title>
                                                        <Card.Text style={{ marginBottom: '20px', minHeight: '55px' }}>{product.desc}</Card.Text>
                                                        <div className='price-cont'>
                                                            <Card.Text style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '600', textAlign: 'right' }}>Qty. {product.qty}</Card.Text>
                                                            <Card.Text style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '600', textAlign: 'right' }}>Rs.{product.price}</Card.Text>
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                                            <Button onClick={() => handleClick(product)} className='btn-click' style={{ fontSize: '30px', height: '40px', width: '40px', display: 'flex', padding: '0', alignItems: 'center', justifyContent: 'center' }} variant="primary">+</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </>
                                        )
                                    })}
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ fontSize: "30px", fontWeight: "500", marginTop: "20px" }}>No Product Found</div>
                            </>
                        )
                    }
                    {
                        selected?.length > 0 ?
                            <div className='order-sidebar'>
                                <div style={{ minHeight: '100px' }}>
                                    <div className='selected-item'>
                                        <p>Name</p>
                                        <p>QTY.</p>
                                        <p>Price</p>
                                        <p>Amt.</p>
                                        <p></p>
                                    </div>
                                    {selected.map((element, idx) => {
                                        return (
                                            <>
                                                <div className='selected-item'>
                                                    <p>{element.name}</p>
                                                    <p>{element.qty}</p>
                                                    <p>{element.price}</p>
                                                    <p>{element.price * element.qty}</p>
                                                    <p onClick={() => handleDelete(element._id)}><span>{element.qty > 1 ? '-' : 'X'}</span></p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div onClick={() => handleProceed()} className='footer-btn'>Proceed Rs.{totalAmt}</div>
                            </div>
                            : null
                    }

                </div>
            </div>
        </>
    )
}

export default Sales