import React from 'react'
import { MdCancel, MdDoneAll } from 'react-icons/md'

const Task = ({ task, tasks, setTasks, index, dark }) => {

    const handleComplete = (e) => {
        e.preventDefault();
        let newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const saveTasks = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    }

    const handleRemove = (e) => {
        e.preventDefault();
        let newTasks = [...tasks];
        newTasks.splice(index, 1)
        setTasks(newTasks);
        saveTasks('myTasks', newTasks);
    }

    return (
        <>
            <div style={{backgroundColor: (dark ? 'rgb(245, 245, 245)' : 'rgb(29, 29, 29)')}} className='flex flex-1 mr-1 rounded justify-between mt-1 min-w-fit md:min-w-max  lg:min-w-fit' >
                <div className=' p-4 w-11/12'>
                    <div style={{textDecoration: (task.completed ? 'line-through' : '')}} className='capitalize text-xl' >
                        {task.title}
                    </div>
                    <div style={{textDecoration: (task.completed ? 'line-through' : '')}} className='w-full text-xs first-letter:capitalize' >
                        {task.description}
                    </div>
                </div>
                <div className='flex flex-col items-center h-full justify-around w-fit border-l border-slate-300 p-2' >
                    <button className='hover:bg-slate-300 transition-all h-fit w-fit bg-slate-100 p-1 rounded' onClick={(e) => {handleComplete(e)}} ><MdDoneAll color='rgb(32, 197, 94)' size={20}/></button>
                    <button className='hover:bg-slate-300 transition-all h-fit w-fit bg-slate-100  p-1 rounded' onClick={(e) => {handleRemove(e)}} ><MdCancel color='red' size={20}/></button>
                </div>
            </div>
        </>

    )
}

export default Task