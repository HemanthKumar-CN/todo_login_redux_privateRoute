import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, deleteTodo, getTodo } from '../Redux/action';
import styles from './Todo.module.css';



const Todo = () => {

    const dispatch = useDispatch();
    const {getTodos, addTodos} = useSelector((state)=> state.todoApp)
    // console.log(addTodos)


    const [query, setQuery] = useState("")
    
    useEffect(() => {
      
        dispatch(getTodo())
      
    }, [dispatch])

    function handleAdd()
    {
        dispatch(addTodo({
            item:query,
            status:false 
        }))

    }

    function handleToggle(id)
    {

    }

    function handleDelete(id)
    {
        dispatch(deleteTodo(id))
    }
    
    
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" onChange={(e)=> setQuery(e.target.value) } placeholder='Add Todo'/>
        <br />
        <button onClick={handleAdd}>Add</button>
        
        <div className={styles.box}>
        {
            addTodos.loading ? "...loading" :
            getTodos.todos.map(t=>  (
                <div className={styles.item} key={t.id}>{t.item}
                <input type="checkbox" onChange={handleToggle} checked={t.status} />
                <button onClick={()=>handleDelete(t.id)}>Delete</button>
                
                </div>
            ))
        }
        </div> 
    </div>
  )
}

export default Todo