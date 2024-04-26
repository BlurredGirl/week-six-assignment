import { useState } from 'react';
import { storeItems } from './Upgrades';


export default function StoreItems() {
    const [catTreatRate, setCatTreatRate] = useState(1); // Initial treat rate
    const [userTreats, setUserTreats] = useState(0); // Accumulated treats

    const handleUpgradeClick = (item) => {
        if (userTreats >= item.cost) {
            // Deduct treats
            setUserTreats(userTreats - item.cost);
            // Apply increment to the treat rate
            setCatTreatRate(catTreatRate + item.increment);
        } else {
            alert("You don't have enough treats to buy this upgrade!");
        }
    };

    return (
        <div>
            {storeItems.map((item, index) => (
                <button key={index} onClick={() => handleUpgradeClick(item)}>
                    {item.name} - Cost: {item.cost} treats
                </button>
            ))}
        </div>
    );
}

