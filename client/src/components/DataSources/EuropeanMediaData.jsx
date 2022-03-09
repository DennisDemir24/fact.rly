import {useState, useEffect} from 'react'
import {data} from '../../TempData/data'
import {HiClipboardCopy} from 'react-icons/hi'
import {FiExternalLink} from 'react-icons/fi'

const EuropeanMediaData = () => {

    useEffect(() => {
        
        console.log(data)
    }, [])

  return (
    <>
        {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className='flex flex-row pt-2 px-2 pb-2 w-6/12'
              >
                <h2 className='font-bold'>{item.title}</h2>
                  <FiExternalLink className="ml-1" />
                  <HiClipboardCopy className="ml-1" />
              </div>
            )
        })}
    </>
  )
}

export default EuropeanMediaData