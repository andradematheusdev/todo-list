import { Button, TextField } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import { Context } from "./contexts/TaskContext";

function App() {
  const [newTask, setNewTask] = useState("");
  const {tasks, setTasks} = useContext(Context);

  function addTask(){
    if(!newTask){
      return window.alert("Digite uma tarefa!");
    }
    tasks ? setTasks([...tasks, newTask]) : setTasks([newTask]);
    setNewTask("");
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  

  function submitTask(event: React.KeyboardEvent<HTMLDivElement>){
    if(event.key == 'Enter'){
      addTask();
    }
  }

  function clearLocalStorage(){
    localStorage.clear();
    location.reload();
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="add-input">
          <TextField
            id="task"
            label="Nova Tarefa"
            variant="outlined"
            className="task-name"
            onChange={
              (text)=>setNewTask(text.target.value)
            }
            value={newTask}
            onKeyDown={(e) => submitTask(e)
            }
          />
          <Button variant="contained" onClick={addTask} disableElevation>ADICIONAR</Button>
        </div>
        <div>
          <TaskList data={ tasks } />
        </div>
        {
        tasks ? 
        <footer>
            <Button variant="contained" color="error" onClick={clearLocalStorage} className="delete-all" disableElevation>
              <AiOutlineDelete size={18} style={{marginRight: 8}} />
              Limpar Lista
            </Button>
        </footer>
        : ""
      }
      </div>
    </div>
  );
}

export default App;
