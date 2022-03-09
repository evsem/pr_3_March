import React from 'react'
import classes from './List.module.css'
import Item from '../Item/Item'

const List = ({ posts, removePost }) => {
  return (
    <div className={classes.wrapper}>
      {posts.map((post, idx) => (
        <Item
          post={post}
          key={post.id}
          number={idx + 1}
          removePost={removePost}
        />
      ))}
    </div>
  )
}

export default List
