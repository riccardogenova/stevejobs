/** @format */

//Definzione struttura dati
const todoList = [{

}
 


]
 //Definizione funzioni (azioni utente)
let todoList

function addTodo(newTitle){
todoList = [...todoList,{
id: Math.random(),
title:newTitle,
completed: false,
}]
}

function updateTodoDesc(idTodo, title){
    todoList= todoList.map(function(todo){
        if(todo.id === idTodo) 
            return{
            ...todo,
            title
        }else return todo;
    });
}

function toggleTodoStatus(idTodo, newStatus){
    todoList.map(function(todo){
        if(todo.id ===idTodo) return{
            ...todo,
            completed: !todo.completed,
        };
        else return todo;
    })
}

function deleteTodo(idTodo){
    todoList =todoList.filter(function(todo){
        if(idTodo !== todo.id) return true;
        else return false;
    });
}
//execution

