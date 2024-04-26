import { storeItems } from './Upgrades';


export default function StoreItems({tps, setTps, treats, setTreats}) {

    function buyUpgrade(item) {
        if (treats >= item.cost) {
            // Deduct treats
            setTreats(treats - item.cost);
            // Apply increment to tps
            setTps(tps + item.increment);
            console.log(`Upgraded! You now have ${tps+1} treats per second.`);
        } else {
            console.log("Not enough treats to buy this upgrade :(");
        }
    }

    return (
        <section className='main-two'>
                <div className='box-two'>
            {storeItems.map((item, index) => (
                <button key={index} onClick={() => buyUpgrade(item)}>
                    {item.name} - Cost: {item.cost} treats
                </button>
            ))}
        </div>
        </section>
    );
}