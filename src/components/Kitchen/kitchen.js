import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Nav from '../Nav/nav.js'
import Card from '../Card/card.js';
import Button from '../Button/button.js'
import '../Card/card.css'
import '../Kitchen/kitchen.css'

const KitchenApp = () => {
    const [order, setOrder] = useState([]);


    useEffect(() => {
        const order2 = [];
        firebase.firestore().collection('client').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                order2.push({
                    id: doc.id,
                    ...doc.data()
                })
            }
            )
            setOrder(order2)
        })
    }, [])


    return (
        <>
            <Nav />
            <div className="kitchen-order">
                {order.map(doc =>
                    <card class="order-card">
                        <div>
                            <p className="order-name">NOME: {doc.client}</p>
                            <p className="order-table">MESA: {doc.table}</p>
                            <p className="order-order">PEDIDO:</p>
                            {doc.order.map(item =>
                                <div><p className="order-item">{item.count} -- {item.name} </p></div>
                            )}
                        </div>
                    </card>
                )}
            </div>
        </>
    )
}

export default KitchenApp