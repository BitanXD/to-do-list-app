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
  inputBox.value = ""

  const checkBox = li.querySelector("input")
  const editBtn = li.querySelector(".edit-btn")
  const deleteBtn = li.querySelector(".delete-btn")
  const taskSpan = li.querySelector("span")

  checkBox.addEventListener("click", function() {
    li.classList.toggle("completed", checkBox.checked)
  })

  editBtn.addEventListener("click", function() {
    const update = prompt("Edit task:", taskSpan.textContent)
    if(update !== null){
        taskSpan.textContent = update;
        li.classList.remove("completed")
    }
  })
}
