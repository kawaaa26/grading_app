import React from 'react';
import TextField from '@mui/material/TextField';

const SubjectForm = (props) => {
  return (
    <div>
      <TextField
        label='Insert Subject Name'
        onChange={props.inputSubject}
        variant='outlined'
        color={props.subject.length > 0 ? 'success' : 'warning'}
        inputProps={{style: {color: 'white', background: 'rgba(135, 135, 135, 0.5)', borderRadius: '5px'}}}
        InputLabelProps={{style: {color: 'white'}}}
      />
    </div>
  )
}

export default SubjectForm;
