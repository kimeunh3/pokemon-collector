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
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const userState = useContext(UserStateContext);
  const isLogin = !!userState.user;

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChange = (event, newValue) => {
    if (newValue) {
      setIsRankPoint(newValue);
    }
  };

  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
  };

  useEffect(() => {
    if (isClick && isLogin) {
      Api.get('ranking/rankPoint/20').then((res) => {
        const newUser = [];
        let idNum = 0;
        res.data.forEach((user) => {
          newUser.push({
            nickname: user.nickname,
            profileImg: user.profileImg,
            rankPoint: user.rankPoint,
            likeType: user.likeType,
            stickers: user.stickers,
            id: idNum,
          });
          idNum += 1;
        });
        setRankPointUsers(newUser);
      });
      Api.get('ranking/stickers/20').then((res) => {
        const newUser = [];
        let idNum = 0;
        res.data.forEach((user) => {
          newUser.push({
            nickname: user.nickname,
            profileImg: user.profileImg,
            stickersCount: user.stickersCount,
            likeType: user.likeType,
            stickers: user.stickers,
            id: idNum,
          });
          idNum += 1;
        });
        setStickersUsers(newUser);
      });
    } else if (isClick) {
      setIsClick(false);
      setLoginDialogOpen(true);
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
          exclusive
          value={IsRankPoint}
          onChange={handleChange}
          style={{ justifyContent: 'center', margin: '15px 0 15px 0' }}
        >
          <ToggleButton value='랭크포인트'>랭크포인트</ToggleButton>
          <ToggleButton value='스티커 수'>스티커 수</ToggleButton>
        </ToggleButtonGroup>
        {rankPointUsers && IsRankPoint === '랭크포인트' && (
          <DialogContent style={{ paddingTop: 0 }}>
            {rankPointUsers.map((user, i) => (
              <RankingUserBox
                key={user.id}
                i={i}
                user={user}
                IsRankPoint={IsRankPoint}
              />
            ))}
          </DialogContent>
        )}
        {IsRankPoint === '스티커 수' && (
          <DialogContent style={{ paddingTop: 0 }}>
            {stickersUsers.map((user, i) => (
              <RankingUserBox
                key={user.id}
                i={i}
                user={user}
                IsRankPoint={IsRankPoint}
              />
            ))}
          </DialogContent>
        )}
        <DialogActions>
          <Button variant='contained' color='inherit' onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={loginDialogOpen}
        onClose={handleLoginDialogClose}
        style={{ zIndex: '1300' }}
      >
        <DialogTitle>pokemon-collector</DialogTitle>
        <DialogContent>로그인 후 이용가능한 서비스입니다!</DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='inherit'
            onClick={handleLoginDialogClose}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RankingButton;
