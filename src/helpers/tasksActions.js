export const setChecked = (tasks, id) => {
  tasks.map((task) => task.id === id ? {...task, checked: !task.checked} : task)
}

