const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const password = document.getElementById("pass");

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todoText))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    let const password= pass.value

    if (todoText) {
        const todo = {
          id: Date.now(),
          text: todoText,
          description: todoDescription,
          completed: false
        };
    
        todos.push(todo);
        saveTodos(todos);
        input.value = "";
        description.value = "";
        displayTodos();
      }
    }


function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}