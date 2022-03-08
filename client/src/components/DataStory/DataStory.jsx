import {useState} from 'react'
import './DataStory.css'

const DataStory = () => {
  const [showInfo, setShowInfo] = useState(true)
  return (
    <section className='text-gray-200'>
      <header className='flex' onClick={() => setShowInfo(!showInfo)}>
        <h1 className='font-bold ml-2 mt-2'>Data Story Snippets</h1>
        <button className='relative bottom-1 left-2'>+</button>
      </header>
      <div className='flex flex-col pt-4 px-4'>
        {showInfo && (
          <>
            <p className='pb-2'>Text</p>
            <p className='pb-2'>Text</p>
            <p className='pb-2'>Text</p>
            <p className='pb-2'>Text</p>
          </>
        )}
      </div>
    </section>
  )
}

export default DataStory
