import React from "react";
import Header from "@components/organism/Header";
import ProductListPage from "@components/pages/ProductListPage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductListPage />
    </div>
  );
};

export default App;