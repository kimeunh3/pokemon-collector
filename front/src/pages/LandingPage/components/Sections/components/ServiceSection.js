import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import ServiceSectionCard from './ServiceSectionCard/ServiceSectionCard';
import { homeURL } from '../../../../../core/constants/ImgSrc';

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
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService1.PNG`}
          title='포켓몬빵 뽑기'
          text1='1000포인트를 지불하고 7가지 종류의 포켓몬빵 중 하나를 구매하면 랜덤으로 포켓몬 스티커를 뽑을 수 있습니다.'
          text2='수집한 포켓몬의 속성, 능력치와 같은 상세 정보를 확인할 수 있어요!'
          handleClick={handleClickBreadButton}
          buttonText='포켓몬빵 뽑으러 가기'
        />
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService2.PNG`}
          title='오박사의 퀴즈'
          text1='오박사의 포켓몬 실루엣 퀴즈를 풀고 포켓몬빵을 구매할 수 있는 포인트를 얻을 수 있습니다.'
          text2='하루에 세 번! 최대한 많은 포인트를 획득해보세요!'
          handleClick={handleClickQuizButton}
          buttonText='퀴즈 풀러 가기'
        />
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService3.PNG`}
          title='출석체크'
          text1='24시간에 한 번, 1000포인트를 받을 수 있습니다.'
          text2='자주 방문해서 원하는 포켓몬을 수집해 보세요!'
          handleClick={handleClickMyPageButton}
          buttonText='출석체크하러 가기'
        />
      </div>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        포켓몬에 대한 정보를 알아보고
        <br />
        자신의 랭킹을 확인하세요!
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr '.repeat(3),
          gap: '80px',
          margin: '100px 100px 0 100px',
        }}
      >
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService4.PNG`}
          title='포켓몬 통계'
          text1='우리에게 친숙한 포켓몬을 통계를 통해 더 자세히 알아보세요.'
          text2='몰랐던 정보를 발견할 수 있습니다!'
          handleClick={handleClickStatisticsButton}
          buttonText='포켓몬 통계 보러 가기'
        />
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService5.PNG`}
          title='포켓몬 도감'
          text1='도감을 통해 수집한 포켓몬을 볼 수 있습니다.'
          text2='포켓몬을 클릭하면 포켓몬의 상세 정보를 확인할 수 있어요!'
          handleClick={handleClickIllustratedBookButton}
          buttonText='포켓몬 도감 보러 가기'
        />
        <ServiceSectionCard
          imgSrc={`${homeURL}homeService6.PNG`}
          title='랭킹 시스템'
          text1='랭크포인트와 포켓몬 스티커 수로 랭킹을 볼 수 있습니다.'
          text2='자신의 랭킹을 확인하고, 다른 사람들은 어떤 포켓몬을 모았는지 확인해보세요!'
          buttonText='왼쪽 아래 랭킹 버튼을 클릭해 보세요!'
          isRanking
        />
      </div>
    </Box>
  );
}

export default ServiceSection;
