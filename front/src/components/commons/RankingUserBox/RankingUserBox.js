import React, { useState } from 'react';
import {
  Box,
  DialogActions,
  DialogContent,
  Button,
  Dialog,
} from '@mui/material';
import MilitaryTech from '@mui/icons-material/MilitaryTech';
import IconObj from '../../../core/Icon';
import RankingStickers from './RankingStickers/RankingStickers';

function RankingUserBox({ i, user }) {
  const medalColor = ['#D5A11E', '#A3A3A3', '#CD7F32'];
  const [isStickersOpen, setIsStickersOpen] = useState(false);

  const handleStickersClose = () => {
    setIsStickersOpen(false);
  };

  return (
    <>
      <button
        type='button'
        style={{ display: 'flex', border: 'none', background: 'none' }}
        onClick={() => {
          setIsStickersOpen(true);
        }}
      >
        <Box
          sx={{
            width: '380px',
            height: '70px',
            display: 'flex',
            borderRadius: '10px',
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            boxShadow: 'inset 80px 0px #66FFFF',
            marginBottom: '10px',
          }}
        >
          {(i === 0 || i === 1 || i === 2) && (
            <MilitaryTech
              style={{
                position: 'relative',
                top: '-20px',
                color: medalColor[i],
              }}
            />
          )}
          <div
            style={{
              fontSize: '24px',
              width: i === 0 || i === 1 || i === 2 ? '34px' : '80px',
              textAlign: 'center',
            }}
          >
            {i + 1}
          </div>
          <div
            style={{
              marginLeft: i === 0 || i === 1 || i === 2 ? '40px' : '20px',
              width: '200px',
            }}
          >
            <div
              style={{
                position: 'relative',
                top: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>{user.nickname}</span>
              <span style={{ marginLeft: '10px' }}>
                {IconObj[user.likeType].Icon}
              </span>
            </div>
            <div style={{ display: 'flex' }}>---------------------------</div>
            <div style={{ position: 'relative', top: '-7px', display: 'flex' }}>
              {user.rankPoint}점
            </div>
          </div>
          <img
            alt=''
            src={`https://d31z0g5vo6ghmg.cloudfront.net/pokemons/${user.profileImg}`}
            style={{
              height: '50px',
              marginLeft: 'auto',
              marginRight: '20px',
            }}
          />
        </Box>
      </button>
      <Dialog
        open={isStickersOpen}
        onClose={handleStickersClose}
        PaperProps={{ style: { backgroundColor: '#e5e5e5' } }}
      >
        <DialogContent style={{ display: 'flex' }}>
          {user.stickers.map((pokemon) => (
            <RankingStickers id={pokemon.id} name={pokemon.name} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='inherit'
            onClick={handleStickersClose}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RankingUserBox;
