export const selectTasks = state => {
  return state.task.tasks.map(task => ({
    id: task.id,
    description: task.description,
    done: task.done
  }));
};
