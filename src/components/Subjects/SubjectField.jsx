import React from 'react';
import { SubjectForm, SubjectButton } from '../index';

const SubjectField = (props) => {
  return (
    <div>
      <SubjectForm inputSubject={props.inputSubject} subject={props.subject} />
      <br />
      <SubjectButton subject={props.subject} handleInsertSubject={props.handleInsertSubject} />
    </div>
  )
}

export default SubjectField;
