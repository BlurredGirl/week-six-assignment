import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StoreItems from './StoreItems';
// import Upgrades from './Upgrades';


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

  // function buyUpgrade() {
  //   setTps(tps + 1);
  // }

  return (
    <div>
      <Header />
      <h2>Meet Chonky Cat, she LOVES treats!</h2>
      <section className="box-main">
                <div className="box-one">
                <button id="treat-button" className="cat-button" onClick={addTreat}></button>
                <p>You have fed me {treats} treats, wowza!</p>
                <p>I get {tps} treat/s per second</p>
                    </div>


              <StoreItems tps={tps} treats={treats} setTps={setTps} setTreats={setTreats}/>
      </section>

      <iframe
          src="https://open.spotify.com/embed/track/2VkskfxTldsOJf9cR0aPed?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="autoplay"
        ></iframe>
      <Footer />
    </div>
  );
}

