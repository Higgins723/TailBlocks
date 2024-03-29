import React from 'react'
import { classNames } from '../../helper'

const Button = ({ children, onClick }) => {
  const buttonClasses = classNames(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
  )

  return (
    <button className={buttonClasses} onClick={onClick}>{children}</button>
  )
}

export default Button
