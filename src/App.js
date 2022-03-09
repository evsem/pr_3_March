import React, { useMemo, useState } from 'react'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'FF', body: 'aA' },
    { id: 2, title: 'bB', body: 'uu' },
    { id: 3, title: 'NN', body: 'Ww' },
    { id: 4, title: 'pp', body: 'MM' },
    { id: 5, title: 'sS', body: 'zz' },
    { id: 6, title: 'cc', body: 'vV' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [posts, filter.sort])
  const searchedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
