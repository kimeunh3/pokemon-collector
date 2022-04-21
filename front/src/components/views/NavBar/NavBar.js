import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import { UserStateContext } from '../../Context';

function NavBar() {
  const navigate = useNavigate();

  // const userState = useContext(UserStateContext);
  // const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  // const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  // const logout = () => {
  //   // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
  //   sessionStorage.removeItem('userToken');
  //   // dispatch 함수를 이용해 로그아웃함.
  //   dispatch({ type: 'LOGOUT' });
  //   // 기본 페이지로 돌아감.
  //   navigate('/login');
  // };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#D72A1F', padding: 0, position: 'fixed', top: 0, width: '-webkit-fill-available', boxShadow: '0 30px black',
        }}
      >
        <Nav
          style={{
            height: 80, alignItems: 'center', justifyContent: 'space-between', marginRight: 80, marginLeft: 30, paddingBottom: 30,
          }}
        >
          <Nav.Item>
            <Nav.Link>
              <img alt="" src={require('./logo.png')} width="200px" height="70px" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>홈</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>퀴즈</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>포켓몬빵</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>통계</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>도감</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" style={{ color: 'white', fontSize: 24 }}>마이페이지</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <div className="nav-right" role="button" tabIndex={0} onClick={() => navigate('/login')} onKeyDown="" style={{ color: '#2F4F4F', fontSize: 24 }}>로그아웃</div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div> </div>
      <div style={{
        position: 'fixed', top: '45px', width: '100%',
      }}
      >
        <div style={{ left: '50%', marginLeft: '-60px', position: 'absolute' }}>
          <img alt="" src={require('./nav-icon.png')} width="110px" height="110px" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
