import styles from "./PizzaCard.module.css";
import React, { FC } from "react";
import Title from "@atoms/Title/Title";
import Button from "@atoms/Button/Button";

interface PizzaCardProps {
  name: string;
  onOrder: () => void;
}

const PizzaCard: FC<PizzaCardProps> = ({ name, onOrder }) => {
  return (
    <div>
      <Title text={name} />
      <Button label="Choisir" onClick={onOrder} />
    </div>
  );
};

export default PizzaCard;

