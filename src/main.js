const characters = document.getElementById('characters');
const pictures = document.getElementById('img');
const quote = document.getElementById('quote');
const button = document.getElementById('button');
const error = document.getElementById('error');

const getCharacters = () => {

  fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
  .then((resp) => {
    return resp.json();
  }).then((data) => {

    // The object didn't have a var name so I had to create my own to access
    // the keys within the object
    const item = data[0];

// Aight, so boom, I realized that the characters stayed on the screen
// so I needed to reset the state
    characters.innerHTML = '';
    pictures.innerHTML = '';
    quote.innerHTML = '';
    error.innerHTML = '';

// I created elements for each key within the object to access in the HTML
      const characterLi = document.createElement('li');
      const imageLi = document.createElement('img');
      const quoteLi = document.createElement('li');

// Then I took the element and rendered the text on the screen
      characterLi.innerText = item.character;

// Appended it to the element I created for it
      characters.appendChild(characterLi);

// Then did the same three more times for the other two keys from the object
      imageLi.src = item.image;

      pictures.appendChild (imageLi);

      quoteLi.innerText = item.quote;

      quote.appendChild(quoteLi);

// My catch error renders Homer's catch phrase...
    }).catch((error) => {
    console.log(error, "D'oh");
    displayError();
  })
};

// while utilizing this error function that we used for the Star Wars API
// This function uses a giphy of Homer using his catch phrase. 
const displayError = () => {
error.innerHTML = `<img src="https://media.giphy.com/media/xT5LMzIK1AdZJ4cYW4/giphy.gif" alt="Homer D'oh!" />`
}

// Added an event listener to the button to tie in the getCharacters function
button.addEventListener('click', getCharacters);