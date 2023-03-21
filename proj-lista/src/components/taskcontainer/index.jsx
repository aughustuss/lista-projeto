import React, { useState } from 'react'
import Task from '../task'

const TaskContainer = ({ tasks = [], setTasks, dark }) => {

    const [todo, setTodo] = useState({
        completed: false,
        title: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.title) {
            let newTask = {...todo};
            let newTasks = [...tasks, ...newTask];
            setTasks(newTasks);
            setTodo({
                title: '',
                description: '',
                completed: false
            });
            localStorage.setItem('myTasks', JSON.stringify(newTasks));
        }
    }

    const handleChange = (e) =>{
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div style={{backgroundColor: (!dark ? 'rgb(38,38,38)' : 'rgb(229, 229, 229)')}} className='h-full w-full rounded'>
                <form className='flex flex-row w-full h-fit p-2 justify-between items-center' onSubmit={handleSubmit}>
                    <input name='title' onChange={handleChange} value={todo.title} placeholder='Título da Tarefa' className='text-neutral-700 p-2 bg-transparent w-5/12 focus:outline-none rounded bg-neutral-50 mr-1' />
                    <input name='description' onChange={handleChange} value={todo.description} placeholder='Descrição Rápida' className='text-neutral-700 p-2 bg-transparent w-5/12 focus:outline-none rounded bg-neutral-50 mr-1' />
                    <button className='text-center w-2/12 text-white p-2 rounded  bg-green-500 focus:outline-none hover:bg-green-600 transition-all' type='submit' >Adicionar</button>
                </form>
                <div>
                    {tasks?.map((task, i) => {
                        return (
                            <Task task={task} index={i} tasks={tasks} setTasks={setTasks} dark={dark} key={i} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TaskContainer