import React, { useState, useCallback } from "react";
import { SubjectForm } from './index';

const Article = () => {

  const [score, setScore] = useState('')
  const [subject, setSubject] = useState('')

  const inputScore = useCallback((event) => {
    console.log(`ArticleComponent: ${event.target.value}`)
    setScore(event.target.value)
  }, [setScore]);

  return (
    <div className="content">
      <p>Display Contents for Article Component Here.</p>
      <p>Subject 1</p>
      <SubjectForm inputScore={inputScore} subject={subject} score={score} />
      <br />
      <p>Subject 2</p>
      <SubjectForm inputScore={inputScore} subject={subject} score={score} />
      <br />
      <p>Subject 3</p>
      <SubjectForm inputScore={inputScore} subject={subject} score={score} />
      <br />
    </div>
  )
}

export default Article;
