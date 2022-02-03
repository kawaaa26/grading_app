import React from 'react';
import Button from '@mui/material/Button';

const SubjectButton = (props) => {
  return (
    <div>
      <Button
        variant='contained'
        color={props.subject.length > 0 ? 'success' : 'warning'}
        onClick={props.handleInsertSubject}
      >
        {props.subject.length > 0 ? `Add Subject: ${props.subject}` : 'Add Subject'}
      </Button>
    </div>
  )
}

export default SubjectButton;
