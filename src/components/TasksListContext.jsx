import React, { createContext, useEffect, useState } from 'react'

export const TaskListConstext = createContext()

export const TaskListConstextProvider = ({children}) => {
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem('TaskListDB')) || []
  )

  useEffect(() => {
    localStorage.setItem('TaskListDB', JSON.stringify(tasksList))
  }, [tasksList])

  const saveTask = (task) => {
    const newTasksList = [...tasksList, task]
    setTasksList(newTasksList)
  }

  const deleteTask = (taskId) => {
    const newTaskList = tasksList.filter(({ id }) => {
      return id !== taskId
    })
    setTasksList(newTaskList)
  }

  return (
    <TaskListConstext.Provider value={{ tasksList, saveTask, deleteTask }}>
      {children}
    </TaskListConstext.Provider>
  )
}