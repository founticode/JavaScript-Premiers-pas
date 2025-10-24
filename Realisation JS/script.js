let input = document.getElementById("addTask");
let list = document.getElementById("list");
let addBtn = document.getElementById("add");

window.addEventListener('load', () => {
    let regTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    regTasks.forEach(t => {
        taskAdd(t.text, t.Done);
    });
});

addBtn.addEventListener('click', () => {
    let text = input.value.trim();
    if (text === "") return;
    taskAdd(text, false);
    input.value = "";
    savedtasks();
});    

    input.addEventListener('keydown', function(g) {
        if (g.key === 'Enter') {
            g.preventDefault();
            addBtn.click();
        }
    });

    function taskAdd(text, Done) {
    let task = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.checked = Done;

    let span = document.createElement('span');
    span.innerText = text;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';

    delBtn.addEventListener('click', () => {
        task.remove();
        savedtasks();
    });

    checkbox.addEventListener('change', () => {
    task.classList.toggle('done', checkbox.checked);
    savedtasks();
  });

  if (Done) {
    task.classList.add('done');
  }

    task.appendChild(checkbox);
    task.appendChild(span);
    task.appendChild(delBtn);

    list.appendChild(task);
}

function savedtasks() {
    let allTasks = [];
    document.querySelectorAll('#list li').forEach(li => {
        let text = li.querySelector('span').innerText;
        let Done = li.querySelector('input[type = "checkbox"]').checked;
        allTasks.push({text, Done});
    });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}


