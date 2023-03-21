const inputField = document.getElementById("amount");
const tenge = document.getElementById("tenge");
const dollar = document.getElementById("dollar");
const euro = document.getElementById("euro");
  
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const amount = parseFloat(inputField.value);
      cnt(amount);
    }
});
function cnt(amount) {
  const fromCurrency = document.getElementById("selected").value;
  const exchangeRates = {
      USD: {
        EUR: 1.06,
        KZT: 1 / 431,
      },
      EUR: {
        USD: 0.94,
        KZT: 1 / 509,
      },
      KZT: {
        USD: 429,
        EUR: 507,
      },
    };
  
const convertedKZT = Math.floor(amount / exchangeRates[fromCurrency]["KZT"]);
const convertedUSD = Math.floor(amount / exchangeRates[fromCurrency]["USD"]);
const convertedEUR = Math.floor(amount / exchangeRates[fromCurrency]["EUR"]);
dollar.textContent = fromCurrency != "USD" ? convertedUSD : "---"
tenge.textContent = fromCurrency != "KZT" ? convertedKZT : "---"
euro.textContent = fromCurrency != "EUR" ? convertedEUR : "---"
}
