const [treats, setTreats] = useState(
    parseInt(localStorage.getItem("treats")) || 0 // parseInt converts the string from local storage to a number
  );
  const [tps, setTPS] = useState(
    parseInt(localStorage.getItem("treatsPerSecond")) || 1
  );