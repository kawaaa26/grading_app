import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';

const SubjectForm = (props) => {
  // const [score, setScore] = useState(0)

  // const inputScore =  useCallback((event) => {
  //   console.log(event.target.value);
  //   setScore(event.target.value)
  // }, [score]);

  useEffect(() => {
    console.log(props.inputScore)
  }, [props.inputScore])

  return (
    <div>
      <h2>Score</h2>
      <br />
      <br />
      <p>{props.score.length > 0 ? props.score : "Score will be displayed here."}</p>
      <div className="score-field">
        {/* TextField Customi */}
        <TextField
          label="Insert Score"
          onChange={props.inputScore}
          variant="outlined"
          color={props.score.length > 0 ? "success" : "warning"}
          inputProps={{style: {color: 'white', background: 'rgba(135, 135, 135, 0.5)', borderRadius: '5px'}}}
          InputLabelProps={{ style: {color: 'white'}}}
        />
      </div>
    </div>
  )
}

export default SubjectForm;
