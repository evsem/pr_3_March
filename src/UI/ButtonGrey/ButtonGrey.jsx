import React from 'react'
import classes from './ButtonGrey.module.css'

const ButtonGrey = ({ children, ...props }) => {
  return (
    <button className={classes.buttonGrey} {...props}>
      {children}
    </button>
  )
}

export default ButtonGrey
