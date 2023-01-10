import React from 'react'
import './Footer.css'
import FooterMenu from './FooterMenu/FooterMenu'
import propTypes from 'prop-types'
function Footer(props) {
  return (
    <>
      <p className='footer-name'>Footer {props.name}</p>
      <FooterMenu name={props.name}/>
    </>
  )
}
Footer.propTypes = {
    name: propTypes.string,
}

Footer.defaultProps = {
    name:"name"
}
export default Footer