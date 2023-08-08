import React from 'react';
import clsx from 'clsx';
import Button from './Button';
import List from './List';

const Dropdown = (props) => {
  const {
    onChange,
    className,
    menu,
    label = "Dropdown",
    ...rest
  } = props;
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target.id !== "dropdownMenuButton" ^ event.target.id !== "dropdown-menu-div")) {
        setVisible(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, []);

  return (
    <div className={clsx("dropdown", className)} id="dropdown-menu-div">
      <Button
        className="btn-secondary dropdown-toggle"
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
            <span key={index} {...rest}>
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