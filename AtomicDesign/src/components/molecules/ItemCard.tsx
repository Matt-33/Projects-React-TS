import React from "react";
import LikeButton from "@atoms/ LikeButton";

interface ItemCardProps {
  item: { id: number; title: string; liked?: boolean };
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h3>{item.title}</h3>
      <LikeButton id={item.id} liked={item.liked} />
    </div>
  );
};

export default ItemCard;
