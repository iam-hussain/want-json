/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { Cover } from './Wrapper';
import { H2, P } from './Text';
import { closeAlert } from '../../Redux/Actions/commonActions';
import { device } from '../../style';
import { PrimaryBtn, Button } from './Button/Button';
import { fadeIn, fadeOut } from './Animation';


export const AlertCover = styled(Cover)`
    background: ${(props) => props.theme.transparency};
    animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear 1;
`;

export const ModelBox = styled.div`
    width: 400px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bg};
    margin: 2%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform:  ${(props) => (props.flip ? 'rotateY(0deg)' : 'rotateY(90deg)')};
    transition: all .5s linear .3s;
    @media ${device.xs_sm}{
        min-width: auto;
        width: 96%;
    }
`;
export const ModelButtonGroup = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: all .3s ease-in-out;
`;


export default function Alert() {
  const alertData = useSelector((state) => state.common.alert);
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandle = (payload) => {
    dispatch(closeAlert(payload.value));
    if (payload.action) {
      if (payload.data.type === 'redirect') {
        router.push(payload.data.url);
      }
      if (payload.data.type === 'logout') {
        cookie.remove('token');
        window.localStorage.setItem('logout', Date.now());
        router.push(payload.data.url);
      }
    }
  };


  return (
    <AlertCover
      show={alertData.show}
      transparency
      onClick={() => clickHandle(alertData.defaultClose)}
    >
      <ModelBox flip={alertData.show}>
        <H2 align="center" margin="10px 0px">{alertData.title}</H2>
        <P align="center" margin="5px 0px">{alertData.content}</P>
        <ModelButtonGroup>
          {alertData.buttons.map((b, i) => (
            b.type === 'primary'
              ? (
                <PrimaryBtn type="button" small key={i} className="button secondary model-close" onClick={() => clickHandle(b)}>
                  {b.title}
                </PrimaryBtn>
              )
              : (
                <Button type="button" small key={i} className="button secondary model-close" onClick={() => clickHandle(b)}>
                  {b.title}
                </Button>
              )
          ))}
        </ModelButtonGroup>
      </ModelBox>
    </AlertCover>
  );
}
