import { useState } from "react"

import { useParams } from 'react-router-dom';

import { useTodoContext } from '../store/index';


function EditTodo(props){
    const closeModal = () => {
        props.setShow(false)
    }

    const { todoId } = useParams();

    const { todoList, changeTodo } = useTodoContext();

    const todo = todoList.find((todo) => todo.id === Number(todoId))

    const [ tentTodo, setTentTodo ] = useState(todo)

    const handleChange = (event) => {
        setTentTodo((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }

    const handleSubmit = () => {
        changeTodo(tentTodo)
    }

    if (props.show){
        return (
            <div id="overlay" onClick={closeModal}>
                <div id="content" onClick={(e) => e.stopPropagation()}>
                    <h2 className='todoDetailHeader'>Edit Todo</h2>
                    <div className='todoDetailContainer'>
                        <div className='titleCon'>
                            <p>Title</p>
                            <input type="text" name="title" placeholder='Title' className='titleInput' onChange={handleChange} value={tentTodo.title}></input>
                        </div>
                        <div className='information'>
                            <div className='item'>
                                <p>Category</p>
                                <input type="text" name="category" placeholder='Category' className='infoInput' onChange={handleChange} value={tentTodo.category}></input>
                            </div>
                            <div className='item'>
                                <p>Priority</p>
                                <input type="number" name="priority" placeholder='Priority(1~3)' min="1" max="3" className='infoInput' onChange={handleChange} value={tentTodo.priority}></input>
                            </div>
                            <div className='item'>
                                <p>Time</p>
                                <input type="text" name="time" placeholder='00:00~00:00' className='infoInput' onChange={handleChange} value={tentTodo.time}></input>
                            </div>
                            <div className='item'>
                                <p>Place</p>
                                <input type="text" name="place" placeholder='Place' className='infoInput' onChange={handleChange} value={tentTodo.place}></input>
                            </div>
                        </div>
                        <h3 className='todoDetailTitle'>Detail</h3>
                        <textarea name="detail" onChange={handleChange} value={tentTodo.detail}></textarea>
                    </div>
                    <div className='btnCon'>
                        <button className='btn' onClick={() => {
                            closeModal();
                            handleSubmit();
                        }}>Edit Todo</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default EditTodo;