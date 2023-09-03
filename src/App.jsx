import React from 'react';
import './App.css';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Card from '../component/Card';
import cardData from '../public/cardData';

export default function App() {
  const cardElements = cardData.map((card) => (
    <Card
      key={card.id} 
      coverImg={card.coverImg}
      title={card.title}
      price={card.price}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
    />
  ));

  return <div>{cardElements}</div>;
}
