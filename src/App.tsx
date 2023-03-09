import { Button, TextField } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import TaskList from "./components/TaskList";
import { Context } from "./contexts/TaskContext";

function App() {
  const [newTask, setNewTask] = useState("");
  const {tasks, setTasks} = useContext(Context);

  function addTask(){
    if(tasks){
      setTasks([...tasks, newTask]);
      setNewTask("");
    }else{
      if(newTask){
        setTasks([newTask]);
        setNewTask("");
      }else{
        window.alert("Digite uma tarefa!");
      }
    }
  }

  function submitTask(event: React.KeyboardEvent<HTMLDivElement>){
    if(event.key == 'Enter'){
      addTask();
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="add-input">
          <TextField
            id="task"
            label="Adicionar"
            variant="outlined"
            className="task-name"
            onChange={
              (text)=>setNewTask(text.target.value)
            }
            value={newTask}
            onKeyDown={(e) => submitTask(e)
            }
          />
          <Button variant="contained" onClick={addTask} disableElevation><AiOutlinePlusCircle size={24} /></Button>
        </div>
        <div>
          <TaskList data={ tasks } />
        </div>
      </div>
    </div>
  );
}

export default App;
