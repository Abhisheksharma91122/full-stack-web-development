document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    console.log(name, amount);

    if (name !== "" && amount > 0 && !isNaN(amount)) {
      let expense = {
        id: Date.now(),
        name,
        amount,
      };

      expenses.push(expense);
      saveExpensesToLocal();
      renderExpenses();
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount.toFixed(2)}
        <button data-id="${expense.id}">delete</button>
        `;

      expenseList.appendChild(li);
    });
    updateTotal();
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
