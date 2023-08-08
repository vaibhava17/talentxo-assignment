import clsx from 'clsx';
import React from 'react'

const List = (props) => {
  const {
    data,
    renderItem = () => { },
    className,
    ...rest
  } = props;
  return (
    <div className={clsx("list", className)}>
      <ul className="list-group" {...rest}>
        {data.map((item, index) => {
          const { ...rest } = item;
          return (
            <li
              key={index}
              className="list-group-item"
              onClick={item.onClick}
              {...rest}
            >
              {renderItem(item, index) || item.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List