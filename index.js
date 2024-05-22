var Quote = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "--Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "--Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "--Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "--Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "--Mahatma Gandhi",
  },
];
function printQuote() {
  var random = Math.trunc(Math.random() * Quote.length + 1);
  var getQuote = document.getElementById("quo");
  getQuote.innerHTML = '"' + Quote[random].quote + '"';
  var getAuthor = document.getElementById("auth");
  getAuthor.innerHTML = Quote[random].author;
}
