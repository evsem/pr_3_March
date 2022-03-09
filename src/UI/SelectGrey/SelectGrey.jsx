import React from 'react'
import classes from './SelectGrey.module.css'

const SelectGrey = ({ value, onChange, defaultValue, options }) => {
  return (
    <select
      className={classes.selectGrey}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectGrey
