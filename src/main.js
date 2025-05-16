const characters = document.getElementById('characters');
const pictures = document.getElementById('img');
const quote = document.getElementById('quote');
const button = document.getElementById('button');


const getCharacters = () => {

  fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
  .then((resp) => {
    return resp.json();
  }).then((data) => {
    const item = data[0];

    characters.innerHTML = '';
    pictures.innerHTML = '';
    quote.innerHTML = '';

      const characterLi = document.createElement('li');
      const imageLi = document.createElement('img');
      const quoteLi = document.createElement('li');

      characterLi.innerText = item.character;

      characters.appendChild(characterLi);

      imageLi.src = item.image;

      pictures.appendChild (imageLi);

      quoteLi.innerText = item.quote;

      quote.appendChild(quoteLi);

    }).catch((error) => {
    console.log(error, "D'oh");
  })
}

button.addEventListener('click', getCharacters);

// document.addEventListener("DOMContentLoaded", getCharacters);