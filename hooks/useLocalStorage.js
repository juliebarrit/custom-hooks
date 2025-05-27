"use client";
import { useState, useEffect, useCallback } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const updateStorage = useCallback((newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  }, [key]);

  useEffect(() => {
    updateStorage(value);
  }, [value, updateStorage]);

  return [value, setValue];
}

