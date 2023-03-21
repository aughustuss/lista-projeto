import React from 'react'
import { MdCancel, MdDoneAll } from 'react-icons/md'

const Task = ({ task = [], tasks, setTasks, index, dark }) => {

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
        let newTasks = [...tasks].splice(index, 1);
        setTasks(newTasks);
        saveTasks('myTasks', newTasks);
    }

    return (
        <>
            <div className='bg-white flex flex-wrap w-full p-4 max-w-full m-auto mt-10 rounded' >
                <div className='flex h-14 w-14 bg-red-500'>
                    <div>
                        {task.title}
                    </div>
                    <div>
                        {task.description}
                    </div>
                </div>
                <div>
                    <button onClick={(e) => {handleComplete(e)}} ><MdDoneAll size={18}/></button>
                    <button onClick={(e) => {handleRemove(e)}} ><MdCancel size={18}/></button>
                </div>
            </div>
        </>

    )
}

export default Task