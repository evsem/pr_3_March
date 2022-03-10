import React, { useEffect, useMemo, useState } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import LoaderGrey from './UI/LoaderGrey/LoaderGrey'

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
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const fetchingPosts = async () => {
    let posts = await PostService.getAll()
    setPosts(posts)
  }
  useEffect(() => {
    fetchingPosts()
  }, [])

  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      <LoaderGrey />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
