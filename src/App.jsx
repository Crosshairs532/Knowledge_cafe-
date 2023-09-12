import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Spend from './component/spend _time/Spend'
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addtoBook = blog => {
    console.log(blog, "weerr")
    const newb = [...bookmarks, blog]
    setBookmarks(newb)
  }

  const [count, setCount] = useState(0)
  const Spendtime = (id, time) => {
    console.log(time, "time spend")
    setCount(count + time)
    const filtered = bookmarks.filter(i => i.id != id)
    setBookmarks(filtered)
  }
  return (

    <>
      <Header></Header>

      <div className='container m-auto flex justify-between'>
        <Blogs addtoBook={addtoBook} Spendtime={Spendtime}></Blogs>
        <div className='flex flex-col items-center'>
          <Spend count={count}></Spend>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
