import { Dispatch, SetStateAction, useState } from 'react';
import './naver-sign-in.css';
import { useRef } from 'react';
import Header from './view/HeaderView';
import Footer from './view/FooterView';
import Main from './view/MainView';

//! App.tsx 
//! tsx: typescript XML(XHTML)
// -> html 태그 사용 가능. 대신 완벽한 문법으로)
// class 대신 className이라고 씀

function App() { // 함수형 컴포넌트


  let isIdCheck2 = false; // 얘는 그냥 변수. 위에는 상태변수

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;