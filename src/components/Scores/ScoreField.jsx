import React, { useState } from 'react';
import { ScoreForm } from '../index';

const ScoreField = (props) => {
  const [score, setScore] = useState(0)

  console.log('現在の状態：' + props.currentStatus)
  if (props.currentStatus) {
    return (
      <div>
        <ScoreForm
          subject={props.subject}
        />
      </div>
    )
  } else {
    return (
      <p>Score will be shown below.</p>
    )
  }
}

export default ScoreField;
