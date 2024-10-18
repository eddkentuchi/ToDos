import React from 'react'
import {RxCheck} from 'react-icons/rx'


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCheck
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}