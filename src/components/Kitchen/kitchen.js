import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Button from '../Button/button.js'
import '../Kitchen/kitchen.css'

const KitchenApp = () => {
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

    const done = (id) => {
        firebase.firestore().collection('client').doc(id).update({
            done: new Date().getTime(),
        })
        setOrder(order.filter(item => item.id != id))
    }


    return (
        <>
            <div className="kitchen-order">
                {order.map(doc => {
                    if (!doc.done) {
                        return (
                            <div>
                                <card className="order-card">
                                    <div>
                                        <p className="order-date">{new Date(doc.date).toLocaleString('pt-BR')}</p>
                                        <p className="order-name">NOME: {doc.client}</p>
                                        <p className="order-table">MESA: {doc.table}</p>
                                        <p className="order-order">PEDIDO:</p>
                                        {doc.order.map(item =>
                                            <div><p className="order-item">{item.count} -- {item.name} </p></div>
                                        )}
                                    </div>
                                    <Button handleClick={() => done(doc.id)} text={'PRONTO'} />
                                </card>
                            </div>
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

export default KitchenApp