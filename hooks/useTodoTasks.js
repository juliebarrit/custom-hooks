"use client";
import { useState, useEffect } from "react";

export function useTodoTasks(listId) {
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem(`tasks-${listId}`);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
        setTasks([]);
        localStorage.setItem(`tasks-${listId}`, JSON.stringify([]));
      }
    } catch (error) {
      console.error("Failed to load tasks:", error);
      setTasks([]);
    }
    setIsInitialized(true);
  }, [listId]);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(`tasks-${listId}`, JSON.stringify(tasks));
      console.log('Saved tasks:', tasks); // Debug log
    } catch (error) {
      console.error("Failed to save tasks:", error);
    }
  }, [tasks, listId, isInitialized]);

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

  return { tasks, addTask, toggleDone, removeTask, isInitialized };
}
