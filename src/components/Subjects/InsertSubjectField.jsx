import React from 'react';
import { SubjectForm, InsertSubjectButton } from '../index';

const InsertSubjectField = (props) => {
  return (
    <div>
      <SubjectForm inputSubject={props.inputSubject} subject={props.subject} />
      <br />
      <InsertSubjectButton subject={props.subject} handleInsertSubject={props.handleInsertSubject} />
    </div>
  )
}

export default InsertSubjectField;
