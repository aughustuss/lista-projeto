import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import TaskContainer from './components/taskcontainer';

function App() {

  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let myList = localStorage.getItem('myTasks');
    if (myList) {
      setTasks(JSON.parse(myList));
    }
  }, [])
  return (
    <>
      <div  className={`${!dark? 'bg-black' : 'bg-white'} font-black text-lg font-mono flex w-screen h-screen items-center justify-center`}>
        <div style={{ backgroundColor: (dark ? 'rgb(245, 245, 245)' : 'rgb(29, 29, 29)'), color: (dark ? '#000' : '#fff') }} className={`${dark ? 'shadow-md shadow-gray-400' : 'shadow-md shadow-black'} h-full max-h-fit w-full rounded  lg:h-5/6 lg:w-5/6 lg:max-h-fit`} >
          <div className='flex flex-col h-1/6 justify-between' >
            <div style={{backgroundColor: (dark ? 'rgb(229, 229, 229)' : 'rgb(38, 38, 38)')}} className='w-full h-fit p-3 flex justify-center items-center mt-5'>
              <p className='capitalize'>Lista de tarefas</p>
            </div>
            <div className='h-auto flex justify-center items-center'>
              <Switch
                checked={dark}
                onChange={() => {
                  setDark(!dark);
                }}
                onColor='#000338'
                offColor='#fac400'
                uncheckedIcon={
                  <div className='flex justify-center items-center h-full ' >
                    <BsFillSunFill size={18} />
                  </div>
                }
                checkedIcon={
                  <div className='flex justify-center items-center h-full'>
                    <BsFillMoonStarsFill size={18} color='white' />
                  </div>
                }
              />
            </div>
          </div>
          <div className='h-5/6 w-full p-8' >
            <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
