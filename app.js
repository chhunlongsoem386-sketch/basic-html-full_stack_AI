// Create array and object
// Store a list of income and expense transactions.
// Each object contains an ID, description, type, and amount in cents.
const transactions = [
    {
        id: 1,
        note: "Salary",
        type: "income",
        amountCents: 30000
    },
    {
        id: 2,
        note: "Lunch",
        category: "Food",
        type: "expense",
        amountCents: 450
    },
    {
        id: 3,
        note: "Bus",
        category: "Transport",
        type: "expense",
        amountCents: 150
    },
    {
        id: 4,
        note: "Notebook",
        category: "Shopping",
        type: "expense",
        amountCents: 300
    }
]
// Convert an amount from cents into dollars.
// Example: 450 cents becomes "$4.50".
// Handle negative amounts and display two decimal places.
function formatMoney(cents) {
    const sign = cents < 0 ? "-" : "";
    return sign + "$" + (Math.abs(cents) / 100).toFixed(2);
}
console.log(formatMoney(transactions[1].amountCents));