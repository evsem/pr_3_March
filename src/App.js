import React, { useMemo, useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'
import InputGrey from './UI/InputGrey/InputGrey'
import SelectGrey from './UI/SelectGrey/SelectGrey'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'FF', body: 'aA' },
    { id: 2, title: 'bB', body: 'uu' },
    { id: 3, title: 'NN', body: 'Ww' },
    { id: 4, title: 'pp', body: 'MM' },
    { id: 5, title: 'sS', body: 'zz' },
    { id: 6, title: 'cc', body: 'vV' },
  ])
  let [select, setSelect] = useState('')
  let [search, setSearch] = useState('')

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    }
    return posts
  }, [posts, select])
  const searchedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search)
    )
  }, [sortedPosts, search])
  const sortPosts = (sort) => {
    setSelect(sort)
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <InputGrey
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SelectGrey
        value={select}
        onChange={sortPosts}
        defaultValue="Sorting"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
