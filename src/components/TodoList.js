import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
  }

  const setEdit = id => {

  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo =id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default TodoList