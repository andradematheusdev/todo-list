import { Button, TextField } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="add-input">
          <TextField id="outlined-basic" label="Adicionar" variant="outlined" className="task-name" />
          <Button variant="contained" disableElevation><AiOutlinePlusCircle size={24} /></Button>
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
