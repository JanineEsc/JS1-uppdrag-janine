const todoInput = document.getElementById('todo-input') 
const todoList = document.getElementById('todo-list')
const errorSpan = document.getElementById('error')
const errorContainer = document.getElementById('error-container');


// GET-förfrågan - hämtar Todo listan från API:et 
const getTodoList = () => {
    fetch('https://js1-todo-api.vercel.app/api/todos?apikey=9a63e9b7-9333-4ade-948f-15378b9b397b')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
getTodoList()

//Lägga till todos - ej fylld i text skickas ett felmeddelande 
function addTodo () {
    if (todoInput.value.trim() === '') {
        errorSpan.textContent = ('Please write down your task')
        errorContainer.style.display = 'block'
    return
   }

 const newTodo = document.createElement('li')
 newTodo.textContent = todoInput.value
 todoList.appendChild(newTodo)
 todoInput.value =''

 errorSpan.textContent = '';
 errorContainer.style.display = 'none';
}



//POST-förfrågan till API:et - ny todo
fetch ('https://js1-todo-api.vercel.app/api/todos?apikey=9a63e9b7-9333-4ade-948f-15378b9b397b', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
})
.then(response => response.json())
.then(newTodo => {
  // Uppdatera listan med den nya todon
  updateTodoList(newTodo);
  // Rensa inmatningsfältet
  newTodoInput.value = '';



  function updateTodoList(newTodo) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = newTodo.title;
    todoList.appendChild(listItem);
   }
})



// Function to update the todo list
function updateTodoList(newTodo) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = newTodo.title;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '50px'; // Adjust the margin-left as needed
    deleteButton.style.padding =' 8px 15px';
    deleteButton.style.fontSize =' 10px';
    deleteButton.addEventListener('click', () => {
        // Call the deleteTodo function when the delete button is clicked
        deleteTodo(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}
























// //  Function to add a new todo item
// function addTodo() {
//     const inputElement = document.getElementById('todo-input');
//     const todoTitle = inputElement.value;

//     // Check if the input is not empty
//     if (todoTitle.trim() === '') {
//         document.getElementById('error').textContent = 'Please enter a task.';
//         return;
//     }

//     // Clear the error message
//     document.getElementById('error').textContent = '';

//     // Create a new todo object
//     const newTodo = { title: todoTitle };

//     // Call the updateTodoList function to add the todo to the list
//     updateTodoList(newTodo);

//     // Clear the input field
//     inputElement.value = '';
// }