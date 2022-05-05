import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

function ServiceSection({ isLogin, handleDialogOpen }) {
  const navigate = useNavigate();

  const handleClickBreadButton = () => {
    if (isLogin) {
      navigate('/bread');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickQuizButton = () => {
    if (isLogin) {
      navigate('/quizPage');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickIllustratedBookButton = () => {
    if (isLogin) {
      navigate('/illustratedBook');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickStatisticsButton = () => {
    if (isLogin) {
      navigate('/statisticsPage');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickMyPageButton = () => {
    if (isLogin) {
      navigate('/myPage');
    } else {
      handleDialogOpen();
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        padding: '150px 0 150px 0',
      }}
    >
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        다양한 방법으로 포인트를 모으고
        <br />
        포켓몬빵을 구입해 포켓몬을 수집할 수 있습니다!
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(3),
          gap: '80px',
          margin: '100px 100px 150px 100px',
        }}
      >
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService1.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              포켓몬빵 뽑기
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              1000포인트를 지불하고 7가지 종류의 포켓몬빵 중 하나를 구매하면
              랜덤으로 포켓몬 스티커를 뽑을 수 있습니다.
              <br />
              수집한 포켓몬의 속성, 능력치와 같은 상세 정보를 확인할 수 있어요!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={handleClickBreadButton}>
              포켓몬빵 뽑으러 가기
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService2.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              오박사의 퀴즈
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              오박사의 포켓몬 실루엣 퀴즈를 풀고 포켓몬빵을 구매할 수 있는
              포인트를 얻을 수 있습니다.
              <br />
              하루에 세 번! 최대한 많은 포인트를 획득해보세요!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={handleClickQuizButton}>
              퀴즈 풀러 가기
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService3.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              출석체크
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              24시간에 한 번, 1000포인트를 받을 수 있습니다.
              <br />
              자주 방문해서 원하는 포켓몬을 수집해 보세요!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={handleClickMyPageButton}>
              출석체크하러 가기
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        포켓몬에 대한 정보를 알아보고
        <br />
        자신의 랭킹을 확인해보세요!
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(3),
          gap: '80px',
          margin: '100px 100px 0 100px',
        }}
      >
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService4.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              포켓몬 통계
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              우리에게 친숙한 포켓몬을 통계를 통해 더 자세히 알아보세요
              <br />
              몰랐던 정보를 발견할 수 있습니다!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={handleClickStatisticsButton}>
              포켓몬 통계 보러 가기
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService5.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              포켓몬 도감
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              도감을 통해 수집한 포켓몬을 볼 수 있습니다
              <br />
              포켓몬을 클릭하면 포켓몬의 상세 정보를 확인할 수 있어요!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={handleClickIllustratedBookButton}>
              포켓몬 도감 보러 가기
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            maxWidth: '500px',
            justifySelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component='img'
            image='homeService6.png'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              랭킹 시스템
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              랭크포인트와 포켓몬 스티커 수로 랭킹을 볼 수 있습니다.
              <br />
              자신의 랭킹을 확인하고, 다른 사람들은 어떤 포켓몬을 모았는지
              확인해보세요!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' disabled>
              왼쪽 아래 랭킹 버튼을 클릭해 보세요!
            </Button>
          </CardActions>
        </Card>
      </div>
    </Box>
  );
}

export default ServiceSection;
