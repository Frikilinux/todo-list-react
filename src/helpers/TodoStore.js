export const getTodoList = () => {
  const todoList = JSON.parse(localStorage.getItem('TaskListDB')) || []
  return todoList
}

// useEffect(() => {
//   localStorage.setItem('TaskListDB', JSON.stringify(state))
// }, [state])
