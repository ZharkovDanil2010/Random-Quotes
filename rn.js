import { getRandomQuote, currentIndex } from './src/quoteManager.js';
import { updateFavoriteIcon, showFavoriteCard, hideFavoriteCard } from './src/favoriteManager.js';
import quotes from './src/quotes.js';

const btn = document.querySelector('.quote-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const toggleFavoriteBtn = document.querySelector('.favorite-btn');
const favoriteContainer = document.querySelector('.favorities_container');

function generateRandomQuote() {
  const randomQuote = getRandomQuote();
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author;
  updateFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  toggleFavoriteBtn.style.display = 'inline-block';
}

function addDeleteFavoriteQuote() {
  const currentQuote = quotes[currentIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(favoriteContainer, currentQuote.quote, currentQuote.author);
  } else {
    hideFavoriteCard(favoriteContainer, currentQuote.quote);
  }
}

btn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', addDeleteFavoriteQuote);
