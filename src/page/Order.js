import React from 'react'
import Sidebar from './Sidebar'

function Order() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <div style={{ height: '100%', width: "100%", background: 'green' }}>Order</div>
            </div>
        </>
    )
}

export default Order