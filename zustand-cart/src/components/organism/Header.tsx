import React from "react";
import useCartStore from "@store/useCartStore";

const Header: React.FC = () => {
    const { clearCart, cartItems } = useCartStore();
  
    return (
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Mon Panier</h1>
        <div>
          <p>Articles : {cartItems.length}</p>
          <button onClick={clearCart}>Vider le panier</button>
        </div>
      </header>
    );
};
  
export default Header;