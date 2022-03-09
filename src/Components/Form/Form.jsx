import React, { useState } from 'react'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'
import InputGrey from '../../UI/InputGrey/InputGrey'
import classes from './Form.module.css'

const Form = ({ addPost_Func }) => {
  let [infoForm, setInfoForm] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...infoForm,
      id: Date.now(),
    }
    addPost_Func(newPost)
    setInfoForm({ title: '', body: '' })
  }
  return (
    <form className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Title"
        value={infoForm.title}
        onChange={(e) => setInfoForm({ ...infoForm, title: e.target.value })}
      />
      <InputGrey
        type="text"
        placeholder="Body"
        value={infoForm.body}
        onChange={(e) => setInfoForm({ ...infoForm, body: e.target.value })}
      />
      <ButtonGrey onClick={addNewPost}>Add post</ButtonGrey>
    </form>
  )
}

export default Form
