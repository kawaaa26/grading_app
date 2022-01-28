import React, { useState, useCallback } from 'react';
import { ScoreField, InsertSubjectField } from './index';

const Main = () => {
  const [subject, setSubject] = useState('')
  const [scoreFields, setScoreFields] = useState([<ScoreField key={0} subject={subject} currentStatus={false} />])

  const inputSubject = useCallback((event) => {
    setSubject(event.target.value);
  }, [setSubject]);

  const handleInsertSubject = useCallback((event) => {
    event.preventDefault()
    if (subject.length > 0) {
      setScoreFields([...scoreFields, <ScoreField key={scoreFields.length} subject={subject} currentStatus={true} />])
    } else {
      console.log('Subject Not inserted!');
    }
  }, [subject])

  return (
    <div className='content'>
      <InsertSubjectField
        inputSubject={inputSubject}
        handleInsertSubject={handleInsertSubject}
        subject={subject}
      />
      <br />
      {scoreFields}
      <br />
    </div>
  )
}

export default Main;
