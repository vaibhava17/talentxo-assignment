import React from 'react';
import clsx from 'clsx';

const List = (props) => {
  const {
    data = [],
    renderItem = () => { },
    className,
    activeItem,
    listRef,
    ...rest
  } = props;
  return (
    <div className={clsx("list", className)}>
      <ul className="list-group" {...rest} ref={listRef}>
        {data.length > 0 ? data.map((item, index) => {
          const { ...rest } = item;
          return (
            <li
              key={index}
              onClick={item.onClick}
              type="button"
              className={clsx("list-group-item pe-auto", { "active": item.id == activeItem })}
              {...rest}
            >
              {renderItem(item, index) || item.label}
            </li>
          )
        }) : <li className="list-group-item border-top-0">No data</li>}
      </ul>
    </div>
  )
};

export default List;