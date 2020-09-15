(function () {
  //Variables
  var taskInput = document.getElementById('taskInput'),
      btnNewTask = document.getElementById('btn-add'),
      list = document.getElementById('list');

  //Functions
  var addTask = function () {
      let task = taskInput.value;

      if(task === ""){
          taskInput.setAttribute("placeholder","Add valid task");
          taskInput.className = "error";
          return false;
      }

      taskInput.value = "";

      //Guardando valor en el navegador
      if(localStorage.getItem('tasks') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      
      for (var i = 0; i <= list.children.length -1; i++) {
        list.children[i].addEventListener("click", deleteTask);
      }

  };
  getTask();
  var inputVoid = function () {
    taskInput.className = "";
    taskInput.setAttribute("placeholder","Write a task");
  };

  var deleteTask = function () {
    this.parentNode.removeChild(this);
  };

  function getTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (var i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      let content = document.createTextNode(task);
            //Adding content to link
            link.appendChild(content);
            link.setAttribute("href", "#");
            //Adding link to new task
            newTask.appendChild(link);
            //Adding new task to List
            list.appendChild(newTask);

    }
  }

  
  //Events
  //Add task
  btnNewTask.addEventListener("click",addTask);

  //Input Void
  taskInput.addEventListener("click", inputVoid);

  //Delete task
    for (var i = 0; i <= list.children.length -1; i++) {
      list.children[i].addEventListener("click", deleteTask);
    }

}())
