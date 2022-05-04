import React, { useState, useEffect, useContext } from 'react';
import {
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import EmojiEventsOutlined from '@mui/icons-material/EmojiEventsOutlined';
import RankingUserBox from './RankingUserBox/RankingUserBox';
import { UserStateContext } from '../../Context';
import * as Api from '../../api';

function RankingButton() {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rankPointUsers, setRankPointUsers] = useState();
  const [stickersUsers, setStickersUsers] = useState();
  const [IsRankPoint, setIsRankPoint] = useState('랭크포인트');
  const [alignment, setAlignment] = useState('랭크포인트');

  const userState = useContext(UserStateContext);
  const isLogin = !!userState.user;

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setIsRankPoint(newAlignment);
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
        setRankPointUsers(newUser);
      });
      Api.get('ranking/stickers/20').then((res) => {
        const newUser = [];
        console.log(res.data);
        res.data.forEach((user) => {
          newUser.push({
            nickname: user.nickname,
            profileImg: user.profileImg,
            stickersCount: user.stickersCount,
            likeType: user.likeType,
            stickers: user.stickers,
          });
        });
        setStickersUsers(newUser);
      });
    } else if (isClick) {
      console.log('로그아웃상태입니다.');
      setIsClick(false);
    }
  }, [isClick]);

  useEffect(() => {
    if (rankPointUsers) {
      setIsOpen(true);
      setIsClick(false);
    }
  }, [rankPointUsers]);

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
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: '#e5e5e5' } }}
      >
        <DialogTitle style={{ backgroundColor: 'white' }}>
          pokemon-collector 랭킹
        </DialogTitle>
        <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={handleChange}
          style={{ justifyContent: 'center' }}
        >
          <ToggleButton value='랭크포인트'>랭크포인트</ToggleButton>
          <ToggleButton value='스티커 수'>스티커 수</ToggleButton>
        </ToggleButtonGroup>
        {rankPointUsers && IsRankPoint === '랭크포인트' && (
          <DialogContent>
            {rankPointUsers.map((user, i) => (
              <RankingUserBox i={i} user={user} IsRankPoint={IsRankPoint} />
            ))}
          </DialogContent>
        )}
        {IsRankPoint === '스티커 수' && (
          <DialogContent>
            {stickersUsers.map((user, i) => (
              <RankingUserBox i={i} user={user} IsRankPoint={IsRankPoint} />
            ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button variant='contained' color='inherit' onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RankingButton;
