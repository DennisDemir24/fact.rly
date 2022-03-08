import React from 'react'
import './DataSources.css'
import EuropeanMediaData from './EuropeanMediaData'

const DataSources = () => {
  return (
    <section className='text-gray-200 w-full'>
      <header className='flex'>
        <h1 className='font-bold ml-2 mt-2'>Data Sources</h1>
      </header>
      <div className='flex flex-row'>
        <div className='rss-feed flex flex-col pt-2 px-2 pb-2 w-6/12'>
          <h2 className='font-bold'>European Media Monitor RSS feed data</h2>
          <EuropeanMediaData />
        </div>
        <div className='rss-feed flex flex-col pt-2 px-2 pb-2 w-6/12'>
          <h2 className='font-bold'>Duck Duck Go</h2>
        </div>
      </div>
    </section>
  )
}

export default DataSources