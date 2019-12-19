import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebase.js';
import Card from '../Card/card.js';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('menu').get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          setMenu((current) => [...current, doc.data()]);
        });
      })
  }, [])

  console.log(menu)

  return (
    <div>
      {
        menu.map(menuItem =>
          <Card name={menuItem.name} price={menuItem.price} handleClick={()=> console.log(menuItem)} />
        )
      }
    </div>
  );
}

export default Menu
