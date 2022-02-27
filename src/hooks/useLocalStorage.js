import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getLocalStorage = key => {
    try {
      const items = localStorage.getItem(key);
      const validItems = items ? JSON.parse(items) : initialValue;
      return validItems;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  };

  const [storageItems, setStorageItems] = useState(() => getLocalStorage(key));

  const setLocalStorage = value => {
    try {
      if (!value) return;
      localStorage.setItem(key, JSON.stringify(value));
      setStorageItems(value);
    } catch (e) {
      console.error(e);
      localStorage.setItem(key, JSON.stringify(initialValue));
      setStorageItems(initialValue);
    }
  };

  return [storageItems, setLocalStorage];
};
