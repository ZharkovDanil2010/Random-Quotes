import quotes from "./quotes.js";

const btn = document.querySelector('.quote-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const toggleFavoriteBtn = document.querySelector('.favorite-btn')
const favoriteContainer = document.querySelector('.favorities_container')

let currentIndex 

btn.addEventListener('click', () => {
  currentIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentIndex];
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author;
  const currentQuote = quotes[currentIndex];
  toggleFavoriteBtn.textContent = currentQuote.isFavorite 
    ? 'Remove from favorities'
    : 'Add to favorities'

    toggleFavoriteBtn.style.display = 'inline-block';
});


toggleFavoriteBtn.addEventListener('click', () => {
  const currentQuote = quotes[currentIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteBtn.textContent = currentQuote.isFavorite 
    ? 'Remove from favorities'
    : 'Add to favorities'

    if (currentQuote.isFavorite) {
      const favoriteCard = document.createElement('div');
      favoriteCard.classList.add('favorite-card')
      favoriteCard.innerHTML = `
        <p class="favorite-quote">${currentQuote.quote}</p>
        <p class="favorite-author">${currentQuote.author}</p>
      `;
      favoriteContainer.appendChild(favoriteCard);
    } else {
      const favoriteCards = favoriteContainer.querySelectorAll('.favorite-card');
      favoriteCards.forEach(card => {
       if (card.textContent.includes(currentQuote.quote)) {
          card.remove();
        }
      });
    }
  }
)

