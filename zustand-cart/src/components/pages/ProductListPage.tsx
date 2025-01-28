import React from "react";
import useCartStore from "@store/useCartStore";
import CartButton from "@components/atoms/CartButton/CartButton";

const ProductListPage: React.FC = () => {
    const { cartItems } = useCartStore();
  
    const products = [
      { id: 1, name: "Produit A", price: 10 },
      { id: 2, name: "Produit B", price: 15 },
      { id: 3, name: "Produit C", price: 20 },
    ];
  
    return (
      <div>
        <h2>Liste des produits</h2>
        {products.map((product) => (
          <div key={product.id} style={{ margin: "10px 0" }}>
            <p>{product.name} - {product.price}€</p>
            <CartButton
              item={product}
              isInCart={!!cartItems.find((item) => item.id === product.id)}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductListPage;