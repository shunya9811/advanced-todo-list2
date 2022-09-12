import { createContext, useContext, useState } from "react"

const TodoContext = createContext();

export function useTodoContext() {
    return useContext(TodoContext);
}

export function TodoContextProvider({children}){
    const [ todoId, setTodoId ] = useState(4)

    

    const [ todoList, setTodoList ] = useState([
        {
            id: 0,
            date: "20220909",
            title: "早起き",
            category: "生活",
            priority: "3",
            time: "9~",
            place: "家",
            detail: "",
            isFavorited: false
        },
        {
            id: 1,
            date: "20220907",
            title: "ランニング",
            category: "生活",
            priority: "3",
            time: "9~",
            place: "家",
            detail: "5km キロ５分半",
            isFavorited: false
        },
        {
            id: 2,
            date: "20220909",
            title: "ランニング",
            category: "生活",
            priority: "2",
            time: "9~",
            place: "家",
            detail: "5km キロ5分半",
            isFavorited: false
        },
        {   
            id: 3,
            date: "20220909",
            title: "散歩",
            category: "生活",
            priority: "1",
            time: "9~",
            place: "家",
            detail: "",
            isFavorited: false
        }, 
    ])

    const addTodo = (todo) => {
        setTodoList((prevState) => [...prevState, todo])
    }

    const changeTodo = (tentTodo) => {
        setTodoList(
            todoList.map((todo) => (todo.id === tentTodo.id ? tentTodo : todo))
        )
    }

    const changeFavo = (tentTodo) => {
        setTodoList(
            todoList.map((todo) => (todo.id === tentTodo.id) ? 
                {
                    id: todo.id,
                    date: todo.date,
                    title: todo.title,
                    category: todo.category,
                    priority: todo.priority,
                    time: todo.time,
                    place: todo.place,
                    detail: todo.detail,
                    isFavorited: !todo.isFavorited
                } : todo
            )
        )
    }

    const deleteTodo = (tentTodo) => {
        setTodoList((prevState) => prevState.filter((todo) => todo !== tentTodo))
    }

    const value = {
        todoId,
        setTodoId,
        todoList,
        addTodo,
        changeTodo,
        changeFavo,
        deleteTodo
    }

    return (
        <TodoContext.Provider value = {value}>{children}</TodoContext.Provider>
    )
}