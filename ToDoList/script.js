function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="complete-btn">✓</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});