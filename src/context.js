import React, { useContext } from "react";

export const TodoContext=React.createContext({
    todos:[
        {
            id:1 ,
            todo:"Fuck You",
            completed :false,
        }
    ], 
    // all the methosds are outlined here 
    //we define them somewhere else
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:( id, Todo)=>{},
    toggleComplete:(id)=>{} 

});

//useTodo is the custon=m hook we have created to use TOdoContext
export  const useTodo=()=>{
    return useContext(TodoContext)
}

//exporting context provider

export   const TodoProvider=TodoContext.Provider