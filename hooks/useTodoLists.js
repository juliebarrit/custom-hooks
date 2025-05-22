"use client";
import { useEffect, useState } from "react";

export function useTodoLists() {
  const [lists, setLists] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initial load
  useEffect(() => {
    try {
      const storedLists = localStorage.getItem("todoLists");
      console.log('Loading lists:', storedLists); // Debug log
      setLists(storedLists ? JSON.parse(storedLists) : []);
    } catch (error) {
      console.error("Failed to load lists:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save on changes
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      console.log('Saving lists:', lists); // Debug log
      localStorage.setItem("todoLists", JSON.stringify(lists));
    } catch (error) {
      console.error("Failed to save lists:", error);
    }
  }, [lists, isInitialized]);

  const addList = (list) => {
    const newList = { ...list, id: `list-${Date.now()}` };
    setLists(prevLists => [...prevLists, newList]);
  };

  const removeList = (id) => {
    setLists(prevLists => prevLists.filter(list => list.id !== id));
    localStorage.removeItem(`tasks-${id}`);
  };

  return { lists, addList, removeList, isInitialized };
}