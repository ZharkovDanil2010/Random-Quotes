export function updateFavoriteIcon(isFavorite, button) {
  button.innerHTML = isFavorite
    ? '<img src="images/star-solid.svg" alt="Remove from favorites" width=30 height=30">'
    : '<img src="images/star-borders.svg" alt="Add to favorites" width=30 height=30">';
}

export function showFavoriteCard(container, quote, author) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
    <p class="favorite-quote">${quote}</p>
    <p class="favorite-author">${author}</p>
  `;
  container.appendChild(favoriteCard);
}

export function hideFavoriteCard(container, quoteText) {
  const favoriteCards = container.querySelectorAll('.favorite-card');
  favoriteCards.forEach(card => {
    if (card.textContent.includes(quoteText)) {
      card.remove();
    }
  });
}
