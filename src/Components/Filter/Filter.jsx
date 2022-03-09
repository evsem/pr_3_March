import React from 'react'
import InputGrey from '../../UI/InputGrey/InputGrey'
import SelectGrey from '../../UI/SelectGrey/SelectGrey'
import classes from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectGrey
        value={filter.sort}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
        defaultValue="Sorting"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
    </div>
  )
}

export default Filter
