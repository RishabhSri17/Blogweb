import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
        <Header />
        <div>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home