(function () {
  //Variables
  var taskInput = document.getElementById('taskInput'),
      btnNewTask = document.getElementById('btn-add'),
      list = document.getElementById('list');

  //Functions
  var addTask = function () {
    let task = taskInput.value;

    if (task === "") {
      taskInput.className = "error";
      taskInput.setAttribute("placeholder","Write a valid task");
      return false;
    }
    taskInput.value = "";
    if(localStorage.getItem('tasks') === null) {
      let tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTask();
  };

  var inputVoid = function () {
    taskInput.className = "";
    taskInput.setAttribute("placeholder","Write a task");
  };

  var deleteTask = function () {
    this.parentNode.removeChild(this);
    getTask();
  };

  //Events
  //Add task
  btnNewTask.addEventListener("click",addTask);

  //Input Void
  taskInput.addEventListener("click", inputVoid);

  //Delete task
    for (var i = 0; i <= list.children.length -1; i++) {
      list.children[i].addEventListener("click", deleteTask);
    }

    function getTask(){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      list.innerHTML = '';
      for(let i = 0; i < tasks.length; i++) {
        let task = tasks[i],
            newTask = document.createElement('li'),
            link = document.createElement('a'),
            content = document.createTextNode(task);

        link.appendChild(content); //Agregando contenido a el enlace
        link.setAttribute("href","#");
        newTask.appendChild(link); //Agregando enlace a la lista
        list.appendChild(newTask); //Agregando lista la lista ordenada 
      }
    }

    getTask();
}())
