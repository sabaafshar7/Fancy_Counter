const decreaseVal = document.querySelector(".counter__minus");
const increaseVal = document.querySelector(".counter__plus");
const resetVal = document.querySelector(".reset__counter");
const containerVal = document.querySelector(".countainer");
const containerTitelVal = document.querySelector(".countainer__title");
const counterEl = document.querySelector(".counter");

resetVal.addEventListener("click", () => {
  //set current to 0
  const CurrentVal = counterEl.textContent;
  const resetNumber = 0;
  counterEl.textContent = resetNumber;

  //reset background color
  containerVal.classList.remove("counter--limit");

  //reset text
  containerTitelVal.textContent = "Fancy Counter";
});

increaseVal.addEventListener("click", () => {
  // get cuurent value
  const CurrentVal = counterEl.textContent;

  // change type string to number for operation
  const CurrentValAsNumber = +CurrentVal;

  //increase by 1
  let increaseCurrent = CurrentValAsNumber + 1;

  //set current with new value

  if (increaseCurrent > 5) {
    increaseCurrent = 5;

    containerVal.classList.add("counter--limit");
    containerTitelVal.innerHTML = "Limit! Buy <b>Pro</b> for >5";
  } else {
    counterEl.textContent = increaseCurrent;
  }
});

decreaseVal.addEventListener("click", () => {
  const CurrentVal = counterEl.textContent;

  const CurrentValAsNumber = +CurrentVal;

  const decreaseCurrent = CurrentValAsNumber - 1;

  //   counterEl.textContent = decreaseCurrent;

  decreaseCurrent < 0
    ? (decreaseCurrent = 0)
    : (counterEl.textContent = decreaseCurrent);

  if (CurrentVal < 6) {
    //reset background color
    containerVal.classList.remove("counter--limit");

    //reset text
    containerTitelVal.textContent = "Fancy Counter";
  }
});
