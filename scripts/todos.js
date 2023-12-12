window.onload = async () => {
    const mainDropdown = document.getElementById("mainDropdown");
    const viewBtn = document.getElementById("viewTask");
    const tasksList = document.getElementById("displayTodo");

    try {
        // Fetch user data and populate the dropdown
        const response = await fetch("http://localhost:8083/api/users");
        const users = await response.json();

        // Add a default "Please select a user" option
        mainDropdown.innerHTML = `<option value="">Please select a user</option>`;

        // Populate the dropdown with user options
        users.forEach((user) => {
            mainDropdown.innerHTML += `<option value="${user.id}">${user.name}</option>`;
        });

        // Fetch and display tasks when the user clicks the button
        viewBtn.onclick = async () => {
            let selectedUserId = mainDropdown.value;

            if (selectedUserId) {
                // Fetch tasks based on the selected user
                const tasksResponse = await fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`);
                const tasks = await tasksResponse.json();

                // Display tasks in the tasksList element
                tasksList.innerHTML = ""; // Clear previous tasks
                tasks.forEach((task) => {
                    // Display task details in a more organized way
                    tasksList.innerHTML += `
                        <li>
                            <strong>Category:</strong> ${task.category}<br>
                            <strong>Description:</strong> ${task.description}<br>
                            <strong>Deadline:</strong> ${task.deadline}<br>
                            <strong>Priority:</strong> ${task.priority}
                        </li>
                    `;
                });
            } else {
                alert("Please select a user before viewing tasks.");
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data. Please try again later.");
    }
};