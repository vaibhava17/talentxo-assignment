import React from 'react'
import clsx from 'clsx';

const Button = (props) => {
  const {
    onClick,
    label = "Click me",
    className,
    ...rest
  } = props;
  return (
    <button
      onClick={onClick}
      className={clsx("btn btn-primary", className)}
      {...rest}
    >
      {label}
    </button>
  )
}

export default Button