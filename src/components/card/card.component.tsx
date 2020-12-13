import React from "react";
import "./card.style.scss";

class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

interface ICard {
  card?: User;
}

export const Card: React.FC<ICard> = ({ card }) => {
  return (
    <div className="card-container">
      <img alt={card?.name} src={`https://robohash.org/${card?.id}?set=set2`} />
      <p>Name: {card?.name}</p>
      <p>Email: {card?.email}</p>
    </div>
  );
};
