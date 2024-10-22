import React, { useState } from "react";
import Button from "../UI/Button/Button";

const ListOfItem = (props) => {
    const [buyAmounts, setBuyAmounts] = useState({});

    const deleteItemHandler = (id) => {
        props.onDelete(id);
        setBuyAmounts((prevAmounts) => {
            const newAmounts = { ...prevAmounts };
            delete newAmounts[id];
            return newAmounts;
        });
    };

    const buyInputChangeHandler = (id, event) => {
        const value = event.target.value;
        setBuyAmounts((prevBuyAmounts) => ({
            ...prevBuyAmounts,
            [id]: value,
        }));
    };

    const buyItemHandler = (id) => {
        const amount = buyAmounts[id];
        if (amount && amount > 0) {
            props.onBuy(id, amount); 
            setBuyAmounts((prevBuyAmounts) => ({
                ...prevBuyAmounts,
                [id]: "",
            }));
        }
    };

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    {item.name} RS: {item.price} {item.quantity} KG
                    <input
                        type="number"
                        placeholder="0"
                        value={buyAmounts[item.id] || ""} 
                        onChange={(event) => buyInputChangeHandler(item.id, event)}
                    />
                    <Button onClick={() => buyItemHandler(item.id)}>Buy</Button>
                    <Button onClick={() => deleteItemHandler(item.id)}>Delete</Button>
                </li>
            ))}
        </ul>
    );
};

export default ListOfItem;
