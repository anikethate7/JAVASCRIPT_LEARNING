document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = [];
  let totalAmountValue = calculateTotalAmount();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
      const newExpense = {
        id: Date.now,
        name: expenseName,
        amount: expenseAmount,
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      updateTotal();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function updateTotal(){
    totalAmountValue = calculateTotalAmount();
    totalAmountDisplay.textContent = totalAmountValue.toFixed(2);
  }
  function calculateTotalAmount() {
    const intialvalue = 0;
    return expenses.reduce((sum,expense) => sum +expense.amount,0)
  }
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
