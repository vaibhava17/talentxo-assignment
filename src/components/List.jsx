import clsx from 'clsx';
import React from 'react'

const List = (props) => {
  const {
    options,
    renderOptions,
    className,
    ...rest
  } = props;
  return (
    <div className={clsx("list", className)}>
      <ul className="list-group" {...rest}>
        {options.map((option, index) => {
          const { ...rest } = option;
          return (
            <li
              key={index}
              className="list-group-item"
              onClick={option.onClick}
              {...rest}
            >
              {renderOptions(option, index)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List