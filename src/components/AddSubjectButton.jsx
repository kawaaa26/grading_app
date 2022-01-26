import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddSubjectButton = (props) => {
  return (
    <div>
      <TextField
        label="Insert Subject Name"
        onChange={props.inputSubject}
        variant="outlined"
        color={props.subject.length > 0 ? "success" : "warning"}
        inputProps={{style: {color: 'white', background: 'rgba(135, 135, 135, 0.5)', borderRadius: '5px'}}}
        InputLabelProps={{ style: {color: 'white'}}}
      />
      <br />
      <Button variant="contained" color={props.subject.length > 0 ? "success" : "warning"} onClick={props.handleAddSubject}>{props.subject.length > 0 ? `Add Subject: ${props.subject}` : "Add Subject"}</Button>
    </div>
  )
}

export default AddSubjectButton;
