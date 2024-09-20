import React from 'react';

const ShoppingCard = ({ items }) => {
  return (
    <div className="shopping-cards" style={{border:"1px solid black"}}>
      {items.map(item => (
        <div className="card" key={item.id} style={{border:"1px dashed black",padding:"5px"}}>
            <img style={{height:"150px"}} src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ShoppingCard);