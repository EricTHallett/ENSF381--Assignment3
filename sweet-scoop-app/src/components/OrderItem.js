function OrderItem({ item }) {
    return (
        <div className="order-item">
            <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
            </div>
            <button className="remove" 
                onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </div>
    );
}

export default OrderItem;