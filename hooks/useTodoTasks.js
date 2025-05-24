"use client";
import { useLocalStorage } from "./useLocalStorage";

export function useTodoTasks(listId) {
  const [tasks, setTasks] = useLocalStorage(`tasks-${listId}`, []);

  const addTask = (task) => {
    const newTask = { 
      ...task, 
      id: `task-${Date.now()}`, 
      done: false 
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return { tasks, addTask, toggleDone, removeTask };
}
