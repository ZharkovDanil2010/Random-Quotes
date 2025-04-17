import quotes from './quotes.js';

export let currentIndex;

export function getRandomQuote() {
  currentIndex = Math.floor(Math.random() * quotes.length);
  return quotes[currentIndex];
}
