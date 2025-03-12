import React from 'react'

function Heading({text} : {text: string}) {
  return (
    <h2 className='text-lg m-2'>
        {text}
    </h2>
  )
}

export default Heading