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
// console.log(formatMoney(transactions[1].amountCents));

// FILTER: Select Only expense transactions
const onlyExpenses = transactions.filter(
    ((t) => t.type ==="expense")
);

console.log(onlyExpenses);

//MAP: Get only the names of expense transactions
const expenseNames = onlyExpenses.map(
    (t) => t.note
);

console.log(expenseNames);

// REDUCE: Calculate the total expense amount in cents
const totalExpense = onlyExpenses.reduce(
    (sum, t) => sum + t.amountCents, 0
);

console.log(totalExpense);

//Combine all three methods into one line of code
const totalExpenseCombined = transactions
    .filter(t => t.type === "expense")
    .map(t => t.amountCents)
    .reduce((sum, amount) => sum + amount, 0);

console.log(totalExpenseCombined);

//Caculate balance using map and reduce
const balance = transactions
    .map(t => t.type ==="expense" ? -t.amountCents : t.amountCents)
    .reduce((sum, amount) => sum + amount, 0);
    
console.log("Total Balance: $" + (balance / 100).toFixed(2));

// ==========Spread Function to add a new transaction=========================
function addTransaction(list, tx) {
    return [...list, tx];
}

// New transaction: Coffee
const newTransaction = {
    id: 5,
    note: "Coffee",
    category: "Food",
    type: "expense",
    amountCents: 250
};

// Add Coffee to a new array
const updatedTransactions = addTransaction(transactions, newTransaction);

//	Count items in the original array.
console.log("Original:", transactions.length);
//	Count items in the updated array.
console.log("Updated:", updatedTransactions.length);
//	Get the fifth item (index 4) from the updated array.
console.log("Last Transaction:", updatedTransactions[4]);

// ==========Filter transactions by category   =========================
function filterByCategory(list, category) {
    return list.filter(t => t.category === category);
}

//find all food transactions
const foodTransactions = filterByCategory(updatedTransactions, "Food");
console.log("Food Transactions:", foodTransactions);

// // ==========Find a transaction by ID   =========================
function findTransactionById(list, id) {
    return list.find(t => t.id === id);
}

//find transaction with ID 3
const transaction3 = findTransactionById(updatedTransactions, 3);
console.log("Transaction with ID 3:", transaction3);

// ==========Filter transactions by type      =========================
function filterByType(list, type) {
    return list.filter(t => t.type === type);
}

//find all expense transactions
const expenseTransactions = filterByType(updatedTransactions, "expense");
console.log("Expense Transactions:", expenseTransactions.length);

// ==============Calculate total amount in cents=========================
function totalCents(list) {
    return list.reduce((sum, t) => sum + t.amountCents, 0);
}

// Calculate total expenses
const expenseTotal = totalCents(expenseTransactions);
console.log("Total Expenses:", formatMoney(expenseTotal));