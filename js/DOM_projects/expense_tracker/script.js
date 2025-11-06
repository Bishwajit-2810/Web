document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form')
    const expenseNameInput = document.getElementById('expense-name')
    const expenseAmountInput = document.getElementById('expense-amount')
    const expenseList = document.getElementById("expense-list")
    const totalAmountDisplay = document.getElementById('total-amount')

    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    let totalAmount = calculateTotal()
    renderExpenses()

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = expenseNameInput.value.trim()
        const amount = parseFloat(expenseAmountInput.value.trim())  // Parse as float

        // Validate if the amount is a valid float and greater than zero
        if (name !== '' && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount  // Store as float
            }
            expenses.push(newExpense)
            saveExpensesLocal()
            renderExpenses()
            updateTotal()

            expenseAmountInput.value = ""
            expenseNameInput.value = ''
        } else {
            alert("Please enter a valid amount.");
        }
    })

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0)
    }

    function saveExpensesLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function updateTotal() {
        totalAmount = calculateTotal()
        console.log(totalAmount)
        totalAmountDisplay.textContent = totalAmount.toFixed(2)  // Display total with 2 decimals
    }

    function renderExpenses() {
        expenseList.innerHTML = ''
        expenses.forEach(expense => {
            // Ensure expense.amount is a float
            if (typeof expense.amount !== 'number') {
                expense.amount = parseFloat(expense.amount)  // Convert to float if not already
            }

            const li = document.createElement('li')
            li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)}  <!-- Display as float with 2 decimals -->
            <button data-id='${expense.id}'>Delete</button>
            `
            expenseList.appendChild(li)

            const deleteButton = li.querySelector('button')
            deleteButton.addEventListener('click', () => {
                deleteExpense(expense.id)
            })
        })
    }

    function deleteExpense(id) {
        expenses = expenses.filter(expense => expense.id !== id)
        saveExpensesLocal()
        renderExpenses()
        updateTotal()
    }
})
