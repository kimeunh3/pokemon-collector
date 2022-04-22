# 프로젝트 백엔드 코드
* Express
* Mongodb Atlas

<br/>

## 폴더 구조
```bash
back
├── src
│   ├── db
│   ├── middlewares
│   ├── routers
│   ├── services
│   ├── util
│   └── app.js
├── static
├── .env
├── .gitignore  
└── index.js
```
* .env 파일
```bash
SERVER_PORT= "서버 포트 번호"
MONGODB_URL= "db URL"
```
* .gitignore 파일
```bash
node_modules
.env
```
<br/>

## 실행 방법
* Express 실행
```bash
npm install --global yarn
yarn
yarn start
```