import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Card from '../Card/card.js';
import Button from '../Button/button.js'
import Input from '../Input/input.js'
import '../Card/card.css'
import '../Menu/menu.css'
import '../Input/input.css'

const Menu = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [modal, setModal] = useState({ status: false });
  const [options, setOptions] = useState('');
  const [extras, setExtras] = useState('');


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
      order,
      date: new Date().getTime()
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
    setOptions('')
    setExtras([])
    setModal({ status: false })
  }

  const addmenos = (item) => {
    if (item.count === 1) {
      const addmenoss = order.filter(product => {
        return product !== item
      })
      setOrder([...addmenoss])
    } else {
      item.count--
      setOrder([...order])
    }
  }

  const deleteItem = (item) => {
    const remove = (order.findIndex((e) => e.name === item.name))
    order.splice(remove, 1);
    setOrder([...order]);
  }

  const verifyOptions = (item2) => {
    if (item2.options.length !== 0) {
      setModal({ status: true, item: item2 })
    } else {
      add(item2)
    }
  }

  const total = order.reduce((acc, item) => acc + (item.count * item.price), 0)

  return (
    <>
      <div className="second-menu">
        <p className="breakfast">MENU DE CAFÉ DA MANHÃ</p>
        <section className="menu-breakfast">
          <div className='menu-item'>
            {item1.map((breakfast) => <Card handleClick={() => add(breakfast)}
              key={breakfast.id}
              name={breakfast.name}
              price={breakfast.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              image={breakfast.image} />)}
          </div>
        </section>
      </div>
      <div className="second-menu">
        <section className="menu-lunch">
          <p className="lunch">MENU TRADICIONAL</p>
          <div className='menu-item'>

            {item2.map((lunch) => <Card handleClick={() => verifyOptions(lunch)}
              key={lunch.id}
              name={lunch.name}
              price={lunch.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              image={lunch.image} />)}
          </div>
        </section>
      </div>
      {modal.status ? (
        <div className="modal">
          <h3>EXTRAS</h3>
          <div>{modal.item.extras.map(elem => (<>
            <input type="radio" name="extras" value={elem} onChange={() => setExtras(`${extras} ${elem}`)} /><label>{elem}</label></>))}</div>
          <div>
            <h3>OPÇÕES</h3>
            <div>{modal.item.options.map(elem => (<>
              <input type="radio" name="options" value={elem} onChange={() => setOptions(`${options} ${elem}`)} /><label>{elem}</label></>))}
            </div>
            <Button handleClick={() => add({ ...modal.item, name: modal.item.name + " " + options + extras })} text={"ADICIONAR"} />
          </div>
        </div>
      ) : false}
      <section className="order">
        <div>
          <p className="order-title">PEDIDO</p>
          {order.map((product, index) =>
            <div key={product.id + index}>
              {product.name}
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              <Button id="button-add" handleClick={(e) => { add(product) }} text={'+'} />
              {product.count}
              <Button id="button-add" handleClick={() => addmenos(product)} text={'-'} />
              <Button id='button-delete' handleClick={(e) => {
                e.preventDefault();
                deleteItem(product);
              }} text={'DELETAR'} />
            </div>)}
          <p className="total">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <div>
            <strong className="client">CLIENTE</strong>
          </div>
          <Input id='input-number' type='text' state={client} handleChange={e => setClient(e.currentTarget.value)} />
          <div>
            <strong className="table">MESA</strong>
          </div>
          <Input id='input-number' type='number' state={table} handleChange={e => setTable(e.currentTarget.value)} />

          <div><Button id='button-send' handleClick={onSubmit} text={'ENVIAR'} /></div>
        </div>
      </section>
    </>
  );
};


export default Menu
