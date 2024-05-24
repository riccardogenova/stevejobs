/** @format */

class TodoList {
  #todos = [];

  addTodo(title) {
    this.#todos = [
      ...this.#todos,
      {
        id: Math.random(),
        title,
        completed: false,
      },
    ];
  }

  updateDesc(idTodo, newTitle) {
    this.#todos = this.#todos.map(todo => {
      if (todo.id === idTodo) {
        return {
          ...todo,
          title: newTitle,
        };
      } else {
        return todo;
      }
    });
  }

  updateStatus(idTodo) {
    this.#todos = this.#todos.map(todo => {
      if (todo.id === idTodo) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }

  deleteTodo(idTodo) {
    this.#todos = this.#todos.reduce((acc, todo) => {
      if (todo.id !== idTodo) {
        acc.push(todo);
      }
      return acc;
    }, []);
  }

  getTodos() {
    return this.#todos;
  }
}

const myTodoList = new TodoList();

myTodoList.addTodo('Comprare il latte');
myTodoList.addTodo('Studiare JavaScript');
myTodoList.addTodo('Fare esercizio fisico');

const firstTodoId = myTodoList.getTodos()[0].id;
myTodoList.updateDesc(firstTodoId, 'Comprare il latte e il pane');

const secondTodoId = myTodoList.getTodos()[1].id;
myTodoList.updateStatus(secondTodoId);

const thirdTodoId = myTodoList.getTodos()[2].id;
myTodoList.deleteTodo(thirdTodoId);

console.log(myTodoList.getTodos());
