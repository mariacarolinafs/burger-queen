import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Card from '../Card/card.js';
import Button from '../Button/button.js'
import Input from '../Input/input.js'
import '../Card/card.css'

const Menu = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);


  useEffect(() => {
    firebase.firestore().collection('menu')
      .get().then((snapshot) => {
        const breakfast = snapshot.docs.filter(doc => doc.data().breakfast).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setItem1(breakfast)

        const lunch = snapshot.docs.filter(doc => doc.data().lunch).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setItem2(lunch)
      })
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    firebase.firestore().collection('client').add({
      client,
      table: parseInt(table),
      order
    }).then(() => {
      setTable('')
      setClient('')
      setOrder([])
    })
  }



  const add = (item) => {
    setOrder([...order, item])
  }


  return (
    <>
      <div className='menu.item'>
        {item1.map((breakfast) => <Card handleClick={() => add(breakfast)} key={breakfast.id} name={breakfast.name} price={breakfast.price} />)}
        {item2.map((lunch) => <Card handleClick={() => add(lunch)} key={lunch.id} name={lunch.name} price={lunch.price} />)}
        {order.map(product => <div key={product.id}> {product.name} {product.price}</div>)}
      </div>
      <div>
        <label>
          <strong>CLIENTE</strong>
        </label>
        <Input id='input-number' type='text' state={client} handleChange={e => setClient(e.currentTarget.value)} />
        <label>
          <strong>MESA</strong>
        </label>
        <Input id='input-number' type='number' state={table} handleChange={e => setTable(e.currentTarget.value)} />
        <Button id='button-send' handleClick={onSubmit} text={'enviar'} />
      </div>
    </>
  );
};


export default Menu
