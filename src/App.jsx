import { useState, useEffect } from "react";

export default function App() {
  // what if I want to do local storage? STRETCH GOAL
  const [treats, setTreats] = useState(0);
  const [tps, setTps] = useState(1); // TPS = Treats Per Second

  useEffect(() => {
    // maybe you want to do some maths here for the 1000/cps etc
    // a timer to be created when the page loads to increase treats by tps every second
    const myInterval = setInterval(() => {
      addTreat();
    }, 1000 / tps);

    // to clean up my timer when I rerun the useEffect to i don't end up with a billion timers
    return () => {
      clearInterval(myInterval);
    };
  }, [tps]);

  function addTreat() {
    // because this runs in a timer, we need to be more explicit about the previous value of the state variable
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
      <h1>Chonky Cat Challenge</h1>
      <button onClick={addTreat}>Feed me a treat!</button>
      <button onClick={buyUpgrade}>Buy upgrade</button>
      <p>You have fed me {treats} treats</p>
      <p>I get {tps} treat/s per second</p>
    </div>
  );
}