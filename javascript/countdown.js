function countdown(seconds) {

  let timeLeft = seconds;

  const intervalRef = setInterval(() => {
    if (timeLeft < 1) {
      console.log(`Time's up`);
      clearInterval(intervalRef);
      return;
    }

    console.log(timeLeft);
    timeLeft--;
  }, 1000)
}

countdown(3)