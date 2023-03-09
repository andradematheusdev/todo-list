import { createContext, useState } from "react";

export interface ITaskContext {
  tasks: string[] | null;
  setTasks: Function;
}

interface IContextProps {
  children: React.ReactNode;
};

export const Context = createContext({} as ITaskContext);

export function TaskContext({ children }: IContextProps) {
  const [tasks, setTasks] = useState(null);
  return <Context.Provider value={{tasks, setTasks}}>{children}</Context.Provider>;
}