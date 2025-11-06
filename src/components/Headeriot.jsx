import React from 'react'

export default function Headeriot(props) {
  const {wow,woo} = props

  return (
    <div>
        <h1 className='text-center text-gray-600 text-3xl font-bold mt-5'>
            Hello IOT SAU Dashboard
            <br />
            {wow} {woo}
        </h1>
        <hr style={{width:'80%'}} className='mb-5 mx-auto'/>
    </div>
  )
}
