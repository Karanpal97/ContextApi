import {useContext,createContext} from 'react'


export const contextTodo=createContext({
 todos:[{
    id:1,
    todo:"msg",
    completed:false
 }],

 add:(todo)=>{},
 deleteTodo:(id)=>{},
 update:(id,todo)=>{},
 toggleComplete:(id)=>{}


});


export const useTodo=()=>{
    return useContext(contextTodo);
}


export const TodoProvider=useTodo.Provider