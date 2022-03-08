import {useState, useEffect} from 'react'
import {data} from '../../TempData/data'

const EuropeanMediaData = () => {

    useEffect(() => {
        
        console.log(data)
    }, [])

  return (
    <>
        {data.map((item, index) => {
            return (
                <div key={item.id} className='flex flex-col pt-2 px-2 pb-2 w-6/12'>
                    <h2 className='font-bold'>{item.title}</h2>
                </div>
            )
        })}
    </>
  )
}

export default EuropeanMediaData