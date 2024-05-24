class TodoItem{
    todos = [];

    addtodo(description){
const newId = Math.random

        this.todos = {...this.todos, {
            id : Math.random(),
            desc : description,
            status: false,
        }
    }
    }

    deletetodo(id Todo) {

        function on filter(element){
            if (element.id === idTodo)
                return false;
                return true
        }

       this.todos = this.todos.filter()
       this.todos = filteredTodos;
    }

    updatetodo(id,desc){
        
    }

    updateTodoIsDone(id,description){
         function onMap(element){
            if(element.id === id){
                return {
                    ...element,
                    desc : description
                }
            }
            else return element;
         }
        this.#todos = this.#todos.map(onmap);
    }

    toggleTodoStatus(id){

    }
}
const myapp = new Todos();
console log(myApp.todos);

const newId = myApp.addTodo("Prova");

console.log(myApp.todos);
myApp.deleteTodos(newId);
console.log(myApp.todos);