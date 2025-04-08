const quotes = [
  { text: "Будь собой — прочие роли уже заняты.", author: "Оскар Уайльд" },
  { text: "Успех — это движение от неудачи к неудаче без потери энтузиазма.", author: "Уинстон Черчилль" },
  { text: "Логика приведет вас от А к Б. Воображение — куда угодно.", author: "Альберт Эйнштейн" },
  { text: "Жизнь — это 10% того, что с тобой происходит, и 90% как ты на это реагируешь.", author: "Чарльз Р. Суинделл" }
];

const btn = document.querySelector('.quote-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

btn.addEventListener('click', () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = random.text;
  quoteAuthor.textContent = random.author;
});


