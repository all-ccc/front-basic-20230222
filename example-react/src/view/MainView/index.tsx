import {useRef, useState} from 'react'
import NaverInput from "../../component/InputComponent";
import NaverFind from '../../component/FindComponent';

const FIND_LIST = [
    {
        title: '비밀번호 찾기',
        link: 'https://nid.naver.com/user2/help/pwInquiry?lang=ko_KR',
    },
    {
        title: '아이디 찾기',
        link: 'https://nid.naver.com/user2/help/idInquiry?lang=ko_KR',
    },
    {
        title: '회원가입',
        link: 'https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR',
    }
];

export default function Main() {
    const formRef = useRef<HTMLFormElement | null>(null);
  
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isIdCheck, setIdCheck] = useState<boolean>(false); // <>: 제너릭 / 비구조화 할당임
    // const [상태명, 상태를 변경해주는 메서드] = useState<데이터 타입>(초기값)
  
    const onSubmitHandler = () => {
      if (!id.trim()) {
        setIdCheck(true);
        return;
      }
      setIdCheck(false);
      if (formRef.current) formRef.current.submit();
    }
    
    return(
    <div className="main">
        <div className="content">
          <div className="sign-in-wrapper">
            <form ref={formRef} id="form" action="https://nid.naver.com/nidlogin.login" method="POST">
              <ul className="panel-wrapper">
                <li className="panel-item">
                  <div className="panel-inner">
  
                    <div className="id-pw-wrapper">
                        <NaverInput label="아이디" type="text" name="id" maxLength={41} iconClass="icon-id" setter={setId} />
                        <NaverInput label="비밀번호" type="password" name="pw" maxLength={16} iconClass="icon-pw" setter={setPassword} />
                    </div>

                    <div className="sign-in-keep-wrapper">
                      <div className="keep-check">
                        <input type="checkbox" className="input-keep" value="off" />
                        <label className="keep-text">로그인 상태 유지</label>
                      </div>
                      <div className="ip-check"></div>
                    </div>
  
                    {isIdCheck && ( // 앞이 false면 뒤에는 읽지 않는 걸 사용
                      <div id="sign-in-error" className="sign-in-error">
                        <div className="error-message">
                          <strong>아이디</strong>를 입력하세요.
                        </div>
                      </div>
                    )}
  
                    <div className="sign-in-button-wrapper">
                      <button type="button" className="sign-in-button" onClick={() => onSubmitHandler()}>
                        <span className="button-text">로그인</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
  
          <ul className="find-wrapper">
            {
                FIND_LIST.map((findItem) => (<NaverFind title={findItem.title} link={findItem.link} />))
            }
          </ul>
          <div className="banner-wrapper">
            <div className="banner-content">
              <img className="banner-img" src="https://ssl.pstatic.net/melona/libs/1378/1378592/b3b27f5a48c19f04e111_20230331172904409.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
}
