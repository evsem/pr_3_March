import React from 'react'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'
import { getPageArray } from '../../Utils/Pages'
import classes from './Pagination.module.css'

const Pagination = ({ totalPages, changePosts }) => {
  let pages = getPageArray(totalPages)
  return (
    <div className={classes.wrapper}>
      {pages.map((page) => (
        <ButtonGrey onClick={() => changePosts(page)} key={page}>
          {page}
        </ButtonGrey>
      ))}
    </div>
  )
}

export default Pagination
