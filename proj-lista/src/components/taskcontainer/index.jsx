import React, { useState } from 'react'
import Task from '../task'

const TaskContainer = ({ tasks, setTasks, dark }) => {

    const [todo, setTodo] = useState({
        completed: false,
        title: '',
        description: ''
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.title) {
            let newTask = {...todo};
            let newTasks = [...tasks, newTask];
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
            <div style={{backgroundColor: (!dark ? 'rgb(38,38,38)' : 'rgb(229, 229, 229)')}} className='h-full w-full rounded overflow-y-scroll '>
                <form className='flex flex-col w-full h-fit p-2 justify-between items-center lg:flex-row' onSubmit={handleSubmit}>
                    <input style={{backgroundColor: (dark ? 'rgb(245, 245, 245)' : 'rgb(29, 29, 29)')}} name='title' onChange={handleChange} value={todo.title} placeholder='Título da Tarefa' className='text-neutral-600 p-2 bg-transparent w-full focus:outline-none rounded bg-slate-100 mr-1 mb-1 lg:w-6/12' />
                    <input style={{backgroundColor: (dark ? 'rgb(245, 245, 245)' : 'rgb(29, 29, 29)')}} name='description' onChange={handleChange} value={todo.description} placeholder='Descrição Rápida' className='text-neutral-600 p-2 bg-transparent w-full focus:outline-none rounded bg-slate-100 mr-1 mb-1 lg:w-6/12' />
                    <button className='text-center w-full lg:w-fit text-white py-2 px-4 rounded  bg-green-500 focus:outline-none hover:bg-green-600 transition-all' type='submit' >+</button>
                </form>
                <div className='flex flex-wrap m-auto mt-10 p-4 rounded w-full' >
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