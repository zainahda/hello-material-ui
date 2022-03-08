import React from "react";
import { DeleteOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";


const avaStyle = (note) => {
  if (note.category === "work") {
    return "#d32f2f";
  }
  if (note.category === "reminders") {
    return "#7b1fa2";
  }
  if (note.category === "todos") {
    return "#1976d2";
  } 
  if (note.category === "money") {
    return "#00796b";
  }
};

const NotesCard = ({ note, handleRemove }) => {
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avaStyle(note) }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleRemove(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesCard;
