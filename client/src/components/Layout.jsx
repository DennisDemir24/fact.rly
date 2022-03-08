import {Fragment} from 'react'
import {Navbar, Footer} from './index'

const Layout = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      <div className='bg-gray-700 h-screen flex'>{children}</div>
      <Footer />
    </Fragment>
  )
}

export default Layout