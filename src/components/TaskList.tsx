import { Avatar, IconButton, ListItemAvatar, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../contexts/TaskContext";

interface ITaskListProps {
  data: string[] | null;
}

const TaskList = ({ data }: ITaskListProps) => {
  const {tasks, setTasks} = useContext(Context);

  function deleteTask(index: number) {
      setTasks(tasks?.splice(index, 1));
  }
  
  return (
    <Box sx={{ width: "100%" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {data?.map((task, index) => {
            return (
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)} title={`index: ${index}`}>
                    <AiOutlineDelete />
                  </IconButton>
                }
                key={index}
              >
                <ListItemText primary={index} />
                <ListItemText primary={task} />
                <ListItemIcon />
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default TaskList;
