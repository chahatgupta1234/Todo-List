import React from 'react'


let footerStyle ={
  border : '2px solid red',
  // position : 'absolute',
  width : '100%',
  // top : "100vh",
  bottom : '0vh'
}
const Footer = () => {
  return (
    <footer className='bg-black text-light text-center py-3' style ={footerStyle}>
      Copupyright &copy; 2024
    </footer>
  )
}

export default Footer
