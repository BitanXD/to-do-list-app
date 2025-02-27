const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("PLease enter a Task!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
<label>
<input type="checkbox"/>
<span>${task}</span>
</label>
<span class="edit-btn">Edit</span>
<span class="delete-btn">Delete</span>
`;

  listContainer.appendChild(li);
  inputBox.value = "";

  const checkBox = li.querySelector("input");
  const editBtn = li.querySelector(".edit-btn");
  const deleteBtn = li.querySelector(".delete-btn");
  const taskSpan = li.querySelector("span");

  // this will toggle checkbox
  checkBox.addEventListener("click", function () {
    li.classList.toggle("completed", checkBox.checked);
    //update counters when checkbox is clicked for a task
    updateCounters();
  });

  // this will enable edit button and remove the completed functionality
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      //set checkbox to false when you edit a task and update the counter as well
      checkBox.checked = false;
      updateCounters();
    }
  });

  const completedCounter = document.getElementById("completed-counter")
  const notCompletedCounter = document.getElementById("not-completed-counter")
  //function to update counters
  function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const notCompletedTasks = document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    notCompletedCounter.textContent = notCompletedTasks;
  }
  updateCounters();

  // delete a task
  deleteBtn.addEventListener("click", function() {
    if(confirm("Do you want to delete this task?")){
      li.remove();
      updateCounters();
    }
  })
}
