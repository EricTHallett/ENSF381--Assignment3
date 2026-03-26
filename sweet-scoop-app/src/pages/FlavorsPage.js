import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlavorCatalog from "../components/FlavorCatalog";
import OrderList from "../components/OrderList";

function FlavorsPage() {
  const [order, setOrder] = useState(() => {
    const saved = localStorage.getItem("order");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem("order", JSON.stringify(order));
  }, [order]);

  const handleAdd = (flavor) => {
    setOrder((prevOrder) => {
      const flavorExists = prevOrder.find((item) => item.id === flavor.id);

      if (flavorExists) {
        return prevOrder.map((item) =>
          item.id === flavor.id
            ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevOrder, { ...flavor, quantity: 1 }];
    });
  };

return (
<div className="flavors-grid"> 
  <Header /> 
  <div className="content"> 
    <FlavorCatalog onAdd={handleAdd} /> 
    <OrderList order={order} setOrder={setOrder} /> 
  </div> 
  <Footer /> 
</div>
);
}

export default FlavorsPage;