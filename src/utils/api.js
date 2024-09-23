 // Simulate API calls

export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Sample Task 1", description: "This is the first task", completed: false },
        { id: 2, title: "Sample Task 2", description: "This is the second task", completed: true }
      ]);
    }, 1000);
  });
};
