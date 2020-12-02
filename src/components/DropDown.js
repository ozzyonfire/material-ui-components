import React, { useRef, useState } from 'react';

import {
  Menu,
  Button,
  MenuItem,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function DropDown(props) {
  const [open, setOpen] = useState(false); 
  const buttonRef = useRef(null);
  const { title, items, ...other } = props;

  const handleClick = item => {
    setOpen(false);
    item.action?.();
  }

  return (
    <React.Fragment>
      <Button color="inherit" ref={buttonRef} onClick={e => setOpen(true)}>
        {title}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu 
        anchorEl={buttonRef.current}
        keepMounted
        open={open}
        onClose={e => setOpen(false)}
      >
        { items && items.map((item, index) =>
          <MenuItem onClick={e => handleClick(item)} {...item.props} key={index}>{item.text}</MenuItem>
        )}
      </Menu>
    </React.Fragment>
  )
}
