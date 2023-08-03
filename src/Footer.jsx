import React from 'react'

const Footer = ({length , listItems}) => {

  return (
    <footer className='footer'>

<h4 className='text-center text-white'> {length} {listItems } </h4>

    </footer>
  )
}

export default Footer