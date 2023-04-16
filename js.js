const selectDescription = document.getElementById('selectdescription');
const selectCategory = document.getElementById('selectcategory');
const expenseCost = document.getElementById('expense-cost');
const list = document.getElementById('myList');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', addItem);

function addItem(e) {
  e.preventDefault();
  
  const description = selectDescription.value;
  const category = selectCategory.value;
  const expense = expenseCost.value;

  const li = document.createElement('li');
  li.textContent = `${expense} - ${description} - ${category}`;

  const editButton = document.createElement('button');
  editButton.style.border = "1px solid black";
  editButton.style.borderRadius = "10px";
  editButton.style.marginLeft = "10px";
  editButton.textContent = 'Edit Expense';
  editButton.addEventListener('click', () => {
    const newDescription = prompt('Enter new description:');
    const newCategory = prompt('Enter new category:');
    const newExpense = prompt('Enter new expense');
    li.textContent = `${newExpense} - ${newDescription} - ${newCategory}`;
    updateLocalStorage();
  });

  const deleteButton = document.createElement('button');
  deleteButton.style.border = "1px solid black";
  deleteButton.style.borderRadius = "10px";
  deleteButton.style.marginLeft = "10px";
  deleteButton.textContent = 'Delete Expense';
  deleteButton.addEventListener('click', () => {
    li.remove();
    updateLocalStorage();
  });

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  
  list.appendChild(li);
  selectCategory.value = '';
  selectDescription.value = '';
  expenseCost.value = '';

  updateLocalStorage();
}

function updateLocalStorage() {
  const expenseList = [];
  const liElements = document.querySelectorAll('#myList li');
  liElements.forEach(li => {
    expenseList.push(li.textContent);
  });
  localStorage.setItem('expenses', expenseList.join(','));
}

function populateList() {
  if(localStorage.getItem('expenses')) {
    const expenseList = localStorage.getItem('expenses').split(',');
    expenseList.forEach(expense => {
      const li = document.createElement('li');
      li.textContent = expense;

      const editButton = document.createElement('button');
      editButton.style.border = "1px solid black";
      editButton.style.borderRadius = "10px";
      editButton.style.marginLeft = "10px";
      editButton.textContent = 'Edit Expense';
      editButton.addEventListener('click', () => {
        const newDescription = prompt('Enter new description:');
        const newCategory = prompt('Enter new category:');
        const newExpense = prompt('Enter new expense');
        li.textContent = `${newExpense} - ${newDescription} - ${newCategory}`;
        updateLocalStorage();
      });

      const deleteButton = document.createElement('button');
      deleteButton.style.border = "1px solid black";
      deleteButton.style.borderRadius = "10px";
      deleteButton.style.marginLeft = "10px";
      deleteButton.textContent = 'Delete Expense';
      deleteButton.addEventListener('click', () => {
        li.remove();
        updateLocalStorage();
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      
      list.appendChild(li);
    });
  }
}

populateList();
