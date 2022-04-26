import React from 'react'
import TodoForm from './TodoForm'
import {MdDeleteOutline} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'


function Todo(props) {
    const [edit, setEdit] = React.useState({
        id:null,
        value:""
    })

    const submitUpdate = value=>{
        props.updateTodo(edit.id,value)
        setEdit({   
            id:null,
            value:""
        })
    }

    if (edit.id) {
        return <TodoForm darkMode={props.darkMode} edit={edit} onSubmit={submitUpdate} />
    }

  return props.todos.map((todo,index) =>(
      <div className={todo.isComplete ? 'todo-row complete' :'todo-row'} key={index} >
          <div key={todo.id} onClick={()=> props.completeTodo(todo.id)}>
             { todo.text}
          </div> 
          <div className='icons'>
              <MdDeleteOutline 
              onClick={() => props.removeTodo(todo.id)}
              className='delete-icon'/>
              <BiEditAlt
              onClick={() => setEdit( { id:todo.id , value:todo.text})}
              className='edit-icon' />
          </div>
          </div>
  ))

}

export default Todo