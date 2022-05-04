import React, { useState, useEffect, useContext } from 'react';
import {
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
} from '@mui/material';
import EmojiEventsOutlined from '@mui/icons-material/EmojiEventsOutlined';
import RankingUserBox from './RankingUserBox/RankingUserBox';
import { UserStateContext } from '../../Context';
import * as Api from '../../api';

function RankingButton() {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState();

  const userState = useContext(UserStateContext);
  const isLogin = !!userState.user;

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isClick && isLogin) {
      Api.get('ranking/rankPoint/20').then((res) => {
        const newUser = [];
        res.data.forEach((user) => {
          newUser.push({
            nickname: user.nickname,
            profileImg: user.profileImg,
            rankPoint: user.rankPoint,
            likeType: user.likeType,
            stickers: user.stickers,
          });
        });
        setUsers(newUser);
      });
    } else if (isClick) {
      console.log('로그아웃상태입니다.');
      setIsClick(false);
    }
  }, [isClick]);

  useEffect(() => {
    if (users) {
      setIsOpen(true);
      setIsClick(false);
    }
  }, [users]);

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          setIsClick(true);
        }}
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
      {users && (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          PaperProps={{ style: { backgroundColor: '#e5e5e5' } }}
        >
          <DialogTitle
            style={{ backgroundColor: 'white', marginBottom: '30px' }}
          >
            pokemon-collector 랭킹
          </DialogTitle>
          <DialogContent>
            {users.map((user, i) => (
              <RankingUserBox i={i} user={user} />
            ))}
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='inherit' onClick={handleClose}>
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default RankingButton;
