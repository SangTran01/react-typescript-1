import React, { FunctionComponent } from "react";
import { Card } from "../card/card.component";
import "./card-list.style.scss";

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

interface IProps {
  cardList?: User[];
}

interface IState {}

export const CardList: FunctionComponent<IProps> = ({ cardList }) => {
  return (
    <div className="card-list-wrapper">
      {cardList?.map((c) => (
        <Card key={c.id} card={c} />
      ))}
    </div>
  );
};
