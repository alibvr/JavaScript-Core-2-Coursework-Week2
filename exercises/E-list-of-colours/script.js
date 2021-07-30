function listOfColours(colours) {
  // Write your code here...
  const content = document.getElementById('content');
    const selectEl = document.createElement('select');
    const paragraphEl = document.createElement('p');
    content.appendChild(selectEl);
    content.appendChild(paragraphEl);

    colours.forEach(colour => {
      const optionEl = document.createElement('option');
      selectEl.appendChild(optionEl);
      optionEl.innerText = colour; 
    });

    selectEl.addEventListener('change', () => {
      paragraphEl.style.color = selectEl.value;
      paragraphEl.innerText = `You have selected: ${selectEl.value}`
    });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
