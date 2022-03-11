import React, { useEffect, useMemo, useState } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import Pagination from './Components/Pagination/Pagination'
import { useFetching } from './Hooks/useFetching'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import LoaderGrey from './UI/LoaderGrey/LoaderGrey'
import { getPageCount } from './Utils/Pages'

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
  let [totalPages, setTotalPages] = useState(0)
  let [limit, setLimit] = useState(10)
  let [page, setPage] = useState(1)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  let [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    let response = await PostService.getAll(limit, page)
    setPosts(response.data)
    let allCountPosts = response.headers['x-total-count']
    setTotalPages(getPageCount(allCountPosts, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const changePost = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      {isPostLoading ? (
        <LoaderGrey />
      ) : (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      )}

      <Pagination totalPages={totalPages} changePosts={changePost} />
    </div>
  )
}

export default App
