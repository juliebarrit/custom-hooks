"use client";
import { useLocalStorage } from "./useLocalStorage";

export function useTodoLists() {
  const [lists, setLists] = useLocalStorage("todoLists", []);

  const addList = (list) => {
    const newList = { ...list, id: `list-${Date.now()}` };
    setLists(prevLists => [...prevLists, newList]);
  };

  const removeList = (id) => {
    setLists(prevLists => prevLists.filter(list => list.id !== id));
    localStorage.removeItem(`tasks-${id}`);
  };

  return { lists, addList, removeList };
}