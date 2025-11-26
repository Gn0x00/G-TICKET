import React from 'react'

type WrapperProps = {
    children : React.ReactNode
}

const Wrapper = ({children} : WrapperProps) => {
  return (
    <div>
      {/*<navBar/>*/}

      <div className='flex items-center justify-between py-5 px-4 bg-white shadow'>
            {children}
      </div>
    </div>
  )
}

export default Wrapper
