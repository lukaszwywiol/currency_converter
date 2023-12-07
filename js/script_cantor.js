{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.3542;
    const rateGBP = 5.0198;
    const rateUSD = 3.975;
    const rateCHF = 4.5175;
    const rateCZK = 0.179;
    const rateNOK = 0.3727;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;

      case "USD":
        return amount / rateUSD;

      case "CHF":
        return amount / rateCHF;

      case "CZK":
        return amount / rateCZK;

      case "NOK":
        return amount / rateNOK;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(
      2
    )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
