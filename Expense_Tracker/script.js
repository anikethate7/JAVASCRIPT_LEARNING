document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Retrieve expenses from localStorage, or initialize as an empty array if not found
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmountValue = calculateTotalAmount();
  renderExpense();

  // Event listener to handle the form submission
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    // Validate input
    if (expenseName !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
      const newExpense = {
        id: Date.now(), // Generate a unique id using the current timestamp
        name: expenseName,
        amount: expenseAmount,
      };

      // Add the new expense to the array
      expenses.push(newExpense);

      // Save updated expenses to localStorage
      saveExpensesToLocal();

      // Re-render the expense list and update the total
      renderExpense();
      updateTotal();

      // Clear the input fields
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  // Function to render expenses to the UI
  function renderExpense() {
    expenseList.innerHTML = ""; // Clear the existing list
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  // Function to update the total displayed on the page
  function updateTotal() {
    totalAmountValue = calculateTotalAmount();
    totalAmountDisplay.textContent = totalAmountValue.toFixed(2);
  }

  // Function to calculate the total expense amount
  function calculateTotalAmount() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  // Function to save expenses to localStorage
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Event listener to handle the deletion of an expense
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));

      // Filter out the deleted expense from the array
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      // Save updated expenses to localStorage and re-render
      saveExpensesToLocal();
      renderExpense();
      updateTotal();
    }
  });
});
