import ShowCalendar from '../component/ShowCalendar'
import Todo from '../component/Todo'

import { useTodoContext } from '../store/index';

import { useState } from 'react';

import moment from 'moment'

function TopPage(){
    const { todoList } = useTodoContext();

    const [display, setDisplay ] = useState('all')

    const handleChange = (event) => {
        setDisplay(event.target.value)
    }

    const renderList = []

    todoList.forEach((todo) => {
        if (todo.date === moment().startOf('day').format('YYYYMMDD')){
            if (display === 'all') {
                renderList.push(
                    <Todo
                        todo={todo}
                        key={todo.date+todo.title}
                    />
                )
            } else {
                if (todo.priority === display){
                    renderList.push(
                        <Todo
                            todo={todo}
                            key={todo.date+todo.title}
                        />
                    )
                }
            }

        }
    });

    return (
        <div className='page'>
            <ShowCalendar/>
            <div className='header'>
                <h2>Today's todo</h2>
                <div className='selectBar'>
                    <h2>priority</h2>
                    <select onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="3">Top priority 3</option>
                        <option value="2">High priority 2</option>
                        <option value="1">Low priority 1</option>
                    </select>
                </div>
            </div>
            <div className='todoCards'>
                {renderList}
            </div>
        </div>
    )
}

export default TopPage;