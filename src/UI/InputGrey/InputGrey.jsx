import React from 'react'
import classes from './InputGrey.module.css'

const InputGrey = ({ ...props }) => {
  return <input className={classes.inputGrey} {...props} />
}

export default InputGrey
