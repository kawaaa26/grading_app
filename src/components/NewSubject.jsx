import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const NewSubject = (props) => {
  return (
    <div>
      <TextField
        label='Input Subject'
        onChange={(e) => {console.log('入力されたSubject: ' + e.target.value)}}
        variant='outlined'
        color='success'
        inputProps={{style: {color: 'white', background: 'rgba(135, 135, 135, 0.5)', borderRadius: '5px'}}}
        InputLabelProps={{ style: {color: 'white'}}}
      />
      <br />
      <Button variant='contained' color='warning' onClick={props.handleAddSubject}>New Subject</Button>
    </div>
  )
}

export default NewSubject;
