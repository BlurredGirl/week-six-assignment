import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StoreItems from './StoreItems'; 


export default function App() {
  // what if I want to do local storage? STRETCH GOAL
  const [treats, setTreats] = useState(0);
  const [tps, setTps] = useState(1); // TPS = Treats Per Second

  useEffect(() => {
    // A timer is created when the page loads to increase treats by tps every second
    const myInterval = setInterval(() => {
      addTreat();
    }, 1000 / tps);

    // to clean up my timer when I rerun the useEffect - stops multiple timers running
    return () => {
      clearInterval(myInterval);
    };
  }, [tps]);

  function addTreat() {
    setTreats((currentTreats) => {
      // what if I want to do local storage? STRETCH GOAL
      return currentTreats + 1;
    });
  }

  function buyUpgrade() {
    setTps(tps + 1);
  }

  return (
    <div>
      <Header />
      <section className="section">
                <div className="box-main">
                <button id="treat-button" className="cat-button" onClick={addTreat}></button>
                <p>You have fed me {treats} treats, wowza!</p>
                    </div>
            </section>
            <section className="section2">
                <div className="box-main">
                <button onClick={buyUpgrade}>Buy upgrade</button>
                <p>You have fed me {treats} treats, wowza!</p>
                <p>I get {tps} treat/s per second</p>
                    </div>
            </section>
            <div className="upgrade-shop">
              <StoreItems />
      </div>
      <iframe
          src="https://open.spotify.com/embed/track/2VkskfxTldsOJf9cR0aPed?utm_source=generator"
          width="100%"
          height="352"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="autoplay"
        ></iframe>
      <Footer />
    </div>
  );
}



// Upgrades - Other method

// function UpgradesTable {(treats, tps, setTps, setTreats)} {
//   function UpgradePurchase (item) {
//     if (count => item.price) {
//       setCount{(count) => count - item.price);
//       setTps(tps) => tps + item.productionRate};
//     } else {
//       alert("You don't have enough treats to buy this upgrade! :(");
//     }
//   }
// }

// return (
//   <table id="upgrades-table">
//     <thead>
//       <tr>
//         <th> className="upgrade-name table-data">Upgrade</th>
//         <th> className="upgrade-prod table-data">Production Rate</th>
//         <th> className="upgrade-price table-data">Price</th>
//       </tr>
//     </thead>
  
//   <tbody>
//     {upgrades0b.map({item} => {
//       return {
//         tr key={item.id}>
//         <td className="upgrade-name table-data">{item.upgradeTitle}</td>
//         <td className="upgrade-prod table-data">{item.productionRate}</td>
//         <td className="upgrade-price table-data">{item.price}</td>
//       }
//     })}
//   </tbody>
// )
