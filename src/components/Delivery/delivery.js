import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Button from '../Button/button.js'
import '../Delivery/delivery.css'

const Delivery = () => {
    const [order, setOrder] = useState([]);


    useEffect(() => {
        const order2 = [];
        firebase.firestore().collection('client').orderBy('date').get().then(querySnapshot => {
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

    const delivered = (id) => {
        firebase.firestore().collection('client').doc(id).update({
            delivered: new Date().getTime(),
        })
        setOrder(order.filter(item => item.id !== id))
    }

    return (
        <>
            <div className="delivery-order">
                {order.map(doc => {
                    if (!doc.delivered && doc.done) {
                        return (
                            <>
                                <div className="order-card">
                                    <div>
                                        <p className="order-date">{new Date(doc.date).toLocaleString('pt-BR')}</p>
                                        <p className="order-name">NOME: {doc.client}</p>
                                        <p className="order-table">MESA: {doc.table}</p>
                                        <p className="order-order">PEDIDO:</p>
                                        {doc.order.map(item =>
                                            <div><p className="order-item">{item.count} -- {item.name} </p></div>
                                        )}
                                    </div>
                                    <Button handleClick={() => delivered(doc.id)} text={'ENTREGUE'} />
                                </div>
                            </>
                        )
                    } else {
                        return (null)
                    }
                }
                )}
            </div>
        </>
    )
}

export default Delivery;