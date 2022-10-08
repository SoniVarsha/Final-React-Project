import React from 'react'
import './Dashboard.css'



function OrderList(props) {
    return (
        <>

            <div className="containerorder">
                <div className="ordercontent">
                    <h6 className="heading">Orders List</h6>
                    <div className='tableorder'>
                        <table className='table'>
                            <thead className='table-head'>
                                <tr>
                                    <th>ORDER NO.</th>
                                    <th>STATUS</th>
                                    <th>OPERATORS</th>
                                    <th>LOCATION</th>
                                    <th>DISTANCE</th>
                                    <th>START DATE</th>
                                    <th>EST DELIVERY DUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data && props.data.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <th><strong>#{item.orderNo}</strong></th>
                                            <td><div className={item.status === 'Moving' ? 'circle moving ' : item.status === 'Pending' ? 'circle pending' : item.status === 'Cancelled' ? 'circle cancelled' : item.status === 'Delivered' ? 'circle delivered' : ''} > </div>{item.status}</td>
                                            <td><strong>{item.operators}</strong></td>
                                            <td><strong>{item.location}</strong></td>
                                            <td><strong>{item.distance} km</strong></td>
                                            <td>{item.startDate}</td>
                                            <td>{item.deliveryDate}</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderList;

