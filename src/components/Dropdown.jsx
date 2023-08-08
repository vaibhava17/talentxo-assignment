import React from 'react'
import List from './List';
import Button from './Button';
import clsx from 'clsx';

const Dropdown = (props) => {
  const {
    onChange,
    className,
    menu,
    label = "Dropdown",
    ...rest
  } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <div className={clsx("dropdown", className)}>
      <Button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        label={label}
        onClick={() => setVisible(!visible)}
      />
      <List
        className={clsx("dropdown-menu p-0 border-start-0 border-end-0", { "show": visible })}
        data={menu}
        onChange={onChange}
        renderItem={(item, index) => {
          const { ...rest } = item;
          return (
            <span className="dropdown-item" key={index} {...rest}>
              {item.label}
            </span>
          )
        }}
        {...rest}
      />
    </div >
  )
}

export default Dropdown