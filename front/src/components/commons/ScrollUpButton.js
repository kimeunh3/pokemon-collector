import React from 'react';
import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';

function ScrollUpButton() {
  return (
    <button
      type='button'
      id='go-top'
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: '30px',
        bottom: '30px',
        zIndex: '1100',
        border: 'solid 3px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
      }}
    >
      <ArrowUpwardOutlined style={{ fontSize: '30px' }} />
    </button>
  );
}

export default ScrollUpButton;
