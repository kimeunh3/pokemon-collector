import React from 'react';
import EmojiEventsOutlined from '@mui/icons-material/EmojiEventsOutlined';

function RankingButton() {
  return (
    <button
      type='button'
      // onClick={() =>
      //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }
      // )}
      style={{
        position: 'fixed',
        left: '30px',
        bottom: '30px',
        zIndex: '1100',
        border: 'solid 3px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        width: '60px',
        height: '60px',
      }}
    >
      <EmojiEventsOutlined style={{ fontSize: '40px' }} />
    </button>
  );
}

export default RankingButton;
