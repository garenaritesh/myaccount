// Initialize balance from localStorage or default to 0

let pin = 200718;
const acc = prompt("Enter PIN");
if (acc == pin) {
    let balance = parseFloat(localStorage.getItem('balance')) || 0;

    // Display the balance
    const balanceDisplay = document.getElementById('balance');
    const updateBalance = () => {
        balanceDisplay.textContent = `Balance: ₹${balance.toFixed(2)}`;
    };

    // Update UI with initial balance
    updateBalance();

    // Add amount to balance
    function addAmount() {
        const amountInput = document.getElementById('amount');
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            localStorage.setItem('balance', balance); // Store in localStorage
            updateBalance();
            amountInput.value = ''; // Clear input field
        } else {
            alert('Please enter a valid amount!');
        }
    }

    // Subtract amount from balance
    function subtractAmount() {
        const amountInput = document.getElementById('amount');
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            localStorage.setItem('balance', balance); // Store in localStorage
            updateBalance();
            amountInput.value = ''; // Clear input field
        } else if (amount > balance) {
            alert('Insufficient balance!');
        } else {
            alert('Please enter a valid amount!');
        }
    }

} else {
    alert("Invalid PIN");
}
