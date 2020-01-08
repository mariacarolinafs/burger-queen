import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Card from '../Card/card.js';
import Button from '../Button/button.js'
import Input from '../Input/input.js'
import '../Card/card.css'
import '../Menu/menu.css'
import { element } from 'prop-types';

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
    if (!order.includes(item)) {
      item.count = 1;
      setOrder([...order, item])
    }
    else {
      item.count += 1;
      setOrder([...order])
    }
  }

  const addmenos = (item) => {
    if(item.count === 1) {
      const addmenoss = order.filter(product => {
        return product != item
      })
      setOrder([...addmenoss])
    } else {
    item.count --
    setOrder([...order])
    }
  }

  const deleteItem = (item) => {
    const remove = (order.findIndex((e) => e.name == item.name))
    order.splice(remove, 1);
    setOrder([...order]);
  }

  const total = order.reduce((acc, item) => acc + (item.count * item.price), 0)


  return (
    <>
      <section class="menu-breakfast">
        <div className='menu.item'>
          <p>MENU DE CAFÉ DA MANHÃ</p>
          {item1.map((breakfast) => <Card handleClick={() => add(breakfast)} key={breakfast.id} name={breakfast.name} price={breakfast.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} />)}
        </div>
      </section>
      <section class="menu-lunch">
        <div className='menu.lunch'>
          <p>MENU TRADICIONAL</p>
          {item2.map((lunch) => <Card handleClick={() => add(lunch)} key={lunch.id} name={lunch.name} price={lunch.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} image={lunch.image} />)}
        </div>
      </section>
      <section class="order">
        <div>
          <p>PEDIDO</p>
          {order.map((product, index) => <div key={product.id + index}> {product.name} {product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} {product.count}
            <Button id='button-delete' handleClick={(e) => {
              e.preventDefault();
              deleteItem(product);
            }} text={'deletar'} /><Button id="button-add" handleClick={(e) => {add(product)}} text={'mais'} /><Button id="button-add" handleClick={() => addmenos(product)} text={'menos'} /></div>)}
          <p class="total">{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
          <div>
            <strong>CLIENTE</strong>
          </div>
          <Input id='input-number' type='text' state={client} handleChange={e => setClient(e.currentTarget.value)} />
          <div>
            <strong>MESA</strong>
          </div>
          <Input id='input-number' type='number' state={table} handleChange={e => setTable(e.currentTarget.value)} />

          <Button id='button-send' handleClick={onSubmit} text={'enviar'} />
        </div>

      </section>
    </>
  );
};


export default Menu
