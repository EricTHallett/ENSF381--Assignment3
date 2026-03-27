import { useEffect } from "react";
import OrderItem from "./OrderItem";

function OrderList({ order, setOrder }) {
    const handleRemove = (id) => {
        setOrder(prevOrder => prevOrder.map(item =>
            item.id === id ? {...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0));
    };

const total = order.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + item.quantity * price;
}, 0);

useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
}, [order]);

    return (
        <div className="order-list">
            <h2>Your Order</h2>
            {order.map(item => (
                <OrderItem
                    key={item.id}
                    item={item}
                    onRemove={handleRemove}
                />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default OrderList;
