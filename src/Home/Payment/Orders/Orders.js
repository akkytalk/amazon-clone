import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
import { useStateValue } from '../../../store/StateProvider';
import Order from './Order/Order';

import "./Orders.css"

function Orders() {

    const [{user},] = useStateValue();
    const [orders, setOrders] = useState();

    useEffect(() => {

        if(user) {
            db.collection("users").doc(user?.uid).collection('orders').orderBy('created', 'desc')
            .onSnapshot((snapshot) => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
            
        }
        
        else {
            setOrders([]);
        }

        
    },[user])

    

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders-order">
               {orders?.map(order => (
                   <Order order={order} /> 
               ))}
               
            </div>
        </div>
    )
}

export default Orders
