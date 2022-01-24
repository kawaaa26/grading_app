import React, { useState, useCallback } from "react";
import { SubjectForm, AddSubjectButton, Material } from './index';
import Button from '@mui/material/Button';

const Article = () => {

  const [subject, setSubject] = useState('')
  // const [score, setScore] = useState('')
  const [forms, setForm] = useState([<SubjectForm key={0} subject={subject} />])
  const [currentStatus, setCurrentStatus] = useState(false)
  // test duplicating component with useState
  // const [amounts, setAmount] = useState([<Material key={0} />])

  // const inputScore = useCallback((event) => {
  //   console.log(`Score inserted: ${event.target.value}`)
  //   setScore(event.target.value);
  //   debugger;
  // }, [setScore]);

  const inputSubject = useCallback((event) => {
    console.log("inputSubject is loaded")
    console.log(`Subject inserted: ${event.target.value}`)
    setSubject(event.target.value);
  }, [setSubject]);

  const handleAddSubject = useCallback((e) => {
    setCurrentStatus(true)
    e.preventDefault()
    if (subject.length > 0) {
      setForm([...forms, <SubjectForm key={forms.length} subject={subject} currentStatus={currentStatus} />])
    } else {
      console.log("Subject not inserted")
    }
    // setForm([...forms, <SubjectForm key={forms.length} subject={subject} score={score} inputScore={inputScore} />])
    // [...forms] => スプレッド構文を使用して、現段階でのforms配列を展開する。
    // それにより、forms配列内の既存の値 + 末尾に追加された<SubjectForm />となる。
  }, [subject])

  // const handleAddSubject = (event) => {
  //   event.preventDefault()
  //   setForm([...forms, <SubjectForm key={forms.length} score={score}  />])
  // }

  // const handleAddMaterial = (e) => {
  //   e.preventDefault()
  //   setAmount([...amounts, <Material key={amounts.length} />])
  // }

  // const handleAddMaterial = useCallback((e) => {
  //   e.preventDefault()
  //   setAmount([...amounts, <Material key={amounts.length} />])
  // }, [amounts])

  return (
    <div className="content">
      {/*
      <p>Display Contents for Article Component Here.</p>
      <p>Subject 1</p>
      <SubjectForm inputScore={inputScore} subject={subject} score={score} />
      <br />
      <Button onClick={handleAddSubject}>
        Add New Score Form
      </Button>
      */}
      <AddSubjectButton inputSubject={inputSubject} handleAddSubject={handleAddSubject} subject={subject} currentStatus={currentStatus} />
      <br />
      {forms}
      <br />
      {/* <Material onClick={handleAddMaterial} />
      <Button onClick={handleAddMaterial}>
        Duplicate Material
      </Button>
      {amounts}
      */}
    </div>
  )
}

export default Article;
