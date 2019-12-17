import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './utils/firebaseUtils.js'

function Service() {
    const [menu, setMenu] = useState([]);
  
    useEffect(() => {
      firebase.firestore().collection('menu').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            setMenu((current) => [...current, doc.data()]);
          });
        })
    }, [])
  
    console.log(menu)
  
    return (
      <div>
        {
          menu.map(elem => <p>{elem.name}</p>)
        }
      </div>
    );
  }
  
  export default Service;
  