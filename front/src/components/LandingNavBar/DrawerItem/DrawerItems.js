import React from 'react';
import { Button, ListItem } from '@material-ui/core';

function DrawerItems({ color = 'inherit', handleOnClick, text }) {
  return (
    <ListItem>
      <span className='material-symbols-outlined'>arrow_right</span>
      <Button
        color={color}
        onClick={handleOnClick}
        style={{ fontSize: '18px' }}
      >
        {text}
      </Button>
    </ListItem>
  );
}

export default DrawerItems;
