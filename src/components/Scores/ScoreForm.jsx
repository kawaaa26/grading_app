import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@mui/material/TextField';

const ScoreForm = (props) => {
  const [score, setScore] = useState(0)

  const inputScore = useCallback((event) => {
    console.log(event.target.value);
    setScore(event.target.value)
  }, [score]);

  useEffect(() => {
    console.log(props.subject.length > 0 ? `props.subject is ${props.subject}` : 'props.subject is Empty!')
  }, [props.inputScore]);

  return (
    <div>
      <h2>{props.subject}</h2>
      <p>{score.length > 0 ? `Score: ${score}` : 'Score will be displayed here.'}</p>
      <div className='score-field'>
        <TextField
          label='Insert Score'
          onChange={inputScore}
          variant='outlined'
          color={score.length > 0 ? 'success' : 'warning'}
          inputProps={{style: {color: 'white', background: 'rgba(135, 135, 135, 0.5)', borderRadius: '5px'}}}
          InputLabelProps={{style: {color: 'white'}}}
        />
      </div>
      <p>----------------------------------------------------</p>
    </div>
  )
}

export default ScoreForm;
