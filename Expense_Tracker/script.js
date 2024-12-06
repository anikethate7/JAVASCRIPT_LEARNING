document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total-amount");

  let expenses = [];
  let totalAmountValue = calculateTotalAmount();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = expenseAmountInput.value;
    console.log(typeof expenseAmount);
    
  });

  function calculateTotalAmount() {}
});
