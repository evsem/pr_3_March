import React from 'react'
import classes from './Item.module.css'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'

const Item = ({ post, number, removePost }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>
          {number}. {post.title}
        </h3>
        <p className={classes.container_infoAboutPost}>{post.body}</p>
      </div>
      <ButtonGrey onClick={() => removePost(post)}>Delete</ButtonGrey>
    </div>
  )
}

export default Item
