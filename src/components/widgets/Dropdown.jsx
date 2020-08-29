import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange,label }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      //only call setOpen when clicked target does not belong to ref.current
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);

  // map out options
  const renderedOptions = options.map(option => {
    // if selected do not show in the option
    if (option.value === selected.value) {
      return null;
    }
    // show whichever one is clicked
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label htmlFor='' className='label'>{label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
     {/* <p className={`ui label ${selected.value}`}>This is a {selected.value.toUpperCase()} text</p> */}
    </>
  )
}

export default Dropdown