// Fetch user data and populate the user dropdown
fetch("http://localhost:8083/api/users")
  .then((response) => response.json())
  .then((data) => {
    const userDropdown = document.getElementById("user");
    data.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      userDropdown.appendChild(option);
    });
  })
  .catch((error) => {});

// Fetch category data and populate the category dropdown
fetch("http://localhost:8083/api/categories")
  .then((response) => response.json())
  .then((data) => {
    const categoryDropdown = document.getElementById("category");
    data.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.name;
      option.textContent = category.name;
      categoryDropdown.appendChild(option);
    });
  })
  .catch((error) => {});

// Add event handler for form submission
document.getElementById("newTodoForm");
document.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const userid = document.getElementById("user").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;
  const description = document.getElementById("description").value;
  const deadline = document.getElementById("deadline").value;

  // Create a new ToDo object
  const newTodo = {
    userid: 1,
    category: category,
    priority: priority,
    description: description,
    deadline: deadline,
  };

  // Perform the POST request to add the new ToDo task
  fetch("http://localhost:8083/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = "/frontend/todos.html"; // Redirect to todos.html
    })
    .catch((error) => {});
});
