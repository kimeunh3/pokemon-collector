import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ListItem } from '@material-ui/core';

function DrawerItem({ color = 'inherit', url, text }) {
  const navigate = useNavigate();

  return (
    <ListItem>
      <span className='material-symbols-outlined'>arrow_right</span>
      <Button
        color={color}
        onClick={() => navigate(`/${url}`)}
        style={{ fontSize: '18px' }}
      >
        {text}
      </Button>
    </ListItem>
  );
}

export default DrawerItem;
