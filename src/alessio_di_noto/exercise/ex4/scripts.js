/** @format */

class ToDoList {
  todos = [];

  addTodo(description) {
    const newId = Math.random();

    this.todos = [
      ...this.todos,
      {
        id: newId,
        stato: false,
        desc: description,
      },
    ];
    return newId;
  }

  deleteTodo(idTodo) {
    function onFilter(element) {
      if (element.id === idTodo) return false;
      return true;
    }
    this.todos = this.todos.filter(onFilter);
  }

  updateTodoDesc(id, description) {
    function onMap(element) {
      if (element.id === id) {
        return {
          ...element,
          desc: description,
        };
      }
      return element;
    }
    this.todos = this.todos.map(onMap);
  }

  toggleTodoStatus(id) {
    function onMap(element) {
      if (element.id === id) {
        element = { ...element, stato: !element.stato };
      } else return element;
    }
    this.todos = this.todos.map(onMap);
  }
}

//const myTodos = new ToDoList();
//console.log(myTodos.todos);
//const newId = myTodos.addTodo('ciao');
//console.log(myTodos.todos);

//Dopo aver implementato il file JS in quello html, uso il WINDOW per poter interagire con la pagina, usando la console

window.app = new ToDoList();
