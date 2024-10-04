//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

const stockTickers = [
  'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB',
  'TSLA', 'NFLX', 'V', 'DIS', 'IBM',
  'GS', 'JPM', 'BA', 'GE', 'INTC',
  'CSCO', 'AMD', 'PYPL', 'NVDA', 'WMT'
];

function getFetch() {
  ticker = stockTickers[Math.floor(Math.random() * stockTickers.length)];
  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=HG0scw4YG0XNiFiuW2MFz2K6HeeNQ68s`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      randomCocktail = Math.floor(Math.random() * 6);
      document.querySelector("#title").innerText = data.ticker;
      document.querySelector("#price").innerText = `$${data.results[0].o}`;

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

