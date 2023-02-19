import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <p>
        copyright &copy; {date.getFullYear()};
    </p>
  )
}

export default Footer