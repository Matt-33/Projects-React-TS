import useCartStore from "@store/useCartStore";
import React from "react";

type CartButtonProps = {
    item: { id: number; name: string; price: number };
    isInCart: boolean;
  };
  
  const CartButton: React.FC<CartButtonProps> = ({ item, isInCart }) => {
    const { addItem, removeItem } = useCartStore();
  
    const handleClick = () => {
      isInCart ? removeItem(item.id) : addItem(item);
    };
  
    return (
      <button onClick={handleClick}>
        {isInCart ? "Retirer du panier" : "Ajouter au panier"}
      </button>
    );
  };
  
  export default CartButton;