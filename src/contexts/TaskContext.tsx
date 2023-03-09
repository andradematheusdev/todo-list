import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface ITaskContext {
  tasks: string[] | null;
  setTasks: Function;
}

interface IContextProps {
  children: React.ReactNode;
};

export const Context = createContext({} as ITaskContext);

export function TaskContext({ children }: IContextProps) {
  // ! NEED FIXING
  // Load state from local storage
  //let loadTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : null;
  const [tasks, setTasks] = useState(null);
  return <Context.Provider value={{tasks, setTasks}}>{children}</Context.Provider>;
}