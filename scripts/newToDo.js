const userId = document.getElementById('user').value;
const category = document.getElementById('category').value;
const priority = document.getElementById('priority').value;
const description = document.getElementById('description').value;
const deadline = document.getElementById('deadline').value;

const newTodo = {
    userId: "userId",
    category: "category",
    priority: "priority",
    description: "description",
    deadline: "deadline"
};
  
  fetch('http://localhost:8083/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });