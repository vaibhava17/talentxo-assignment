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
        className={clsx("dropdown-menu p-0 border-0", { "show": visible })}
        options={menu}
        onChange={onChange}
        renderOptions={(option, index) => {
          const { ...rest } = option;
          return (
            <span className="dropdown-item" key={index} {...rest}>
              {option.label}
            </span>
          )
        }}
        {...rest}
      />
      {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
      </ul> */}
    </div >
  )
}

export default Dropdown