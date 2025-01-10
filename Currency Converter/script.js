const rates = {
    USD: { USD: 1, EUR: 0.85, INR: 73.5, GBP: 0.75 },
    EUR: { USD: 1.18, EUR: 1, INR: 86.2, GBP: 0.88 },
    INR: { USD: 0.0136, EUR: 0.0116, INR: 1, GBP: 0.0102 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 98.1, GBP: 1 },
};

const convertBtn = document.getElementById('convert-btn');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const toggleMode = document.getElementById('toggle-mode');

convertBtn.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount';
        return;
    }

    const rate = rates[from][to];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
});

toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleMode.textContent = 'Switch to Light Mode';
    } else {
        toggleMode.textContent = 'Switch to Dark Mode';
    }
});