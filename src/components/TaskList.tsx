import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%'}}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
