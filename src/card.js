
import './card-header.css';
import React from 'react';

function card(){
    return(
        <div className='deck'>
            <h1>
            <span className='Deck-icons black'>♠</span>
            <span className='Deck-icons red'>♥</span>
            <span className='Deck-icons black'>♣</span>
            <span className='Deck-icons red'>♦</span>
            Card Dealer
            <span className='Deck-icons red'>♦</span>
            <span className='Deck-icons black'>♣</span>
            <span className='Deck-icons red'>♥</span>
            <span className='Deck-icons black'>♠</span>
            </h1>
            
        </div>
    );
}

export default card;