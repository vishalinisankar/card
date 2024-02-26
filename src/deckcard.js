

import './card-header.css';
import './deckcard.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Deckcard(){
   const [data, setData] = useState(-1);
   const [res, setRes] = useState({});
   
   let value;
   let source;
   let response;
   async function handleClick(){
          try {
            response = await axios.get('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1');
            setData(data=> data+1);
            setRes(response.data.cards[0].image);
            console.log(data);
            //value=response.data.cards[0].image;
            //source = `<img src="${response.data.cards[0].image}" />`
            //console.log(response.data.cards[0].image);
          } 
          catch (error) {
            console.error('Error fetching data:', error);
          }
          console.log(response.data);
         return response.data;
    }
    //console.log(source);
    //console.log(res);
    return(
        <div>
            <button onClick={handleClick} >Get Card </button>
            <div className='cards'>
            { (data > -1) ? <img src={res} /> : <span >Please click Get Card </span>}
            </div>
        </div>
    );
}

export default Deckcard;