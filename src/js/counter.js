const setupCounter = (element) => {
  let counter = 0;
  const currentElement = element;
  const setCounter = (count) => {
    counter = count;
    currentElement.textContent = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
};

export default setupCounter;
