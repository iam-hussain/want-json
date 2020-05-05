import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Cover } from './Wrapper';
import { H2, P } from './Text';
import { closeAlert } from '../../Redux/Actions/commonActions';
import { device } from '../../style';
import { PrimaryBtn, Button } from './Button/Button';

export const ModelBox = styled.div`
    min-width: 400px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bg};
    margin: 2%;
    padding: 28px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform:  ${(props) => (props.flip ? 'rotateY(0deg)' : 'rotateY(90deg)')};
    transition: all .6s ease-in-out .6s;
    @media ${device.xs_sm}{
        min-width: auto;
        width: 96%;
    }
`;
export const ModelButtonGroup = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: all .3s ease-in-out;
`;


export default function Alert() {
  const alertData = useSelector((state) => state.common.alert);
  const dispatch = useDispatch();
  return (
    <Cover index={alertData.show ? '10' : '-10'} opacity={alertData.show ? '1' : '0'} transparency onClick={() => dispatch(closeAlert(alertData.closeValue))}>
      <ModelBox flip={alertData.show}>
        <H2 align="center" margin="10px 0px">{alertData.title}</H2>
        <P align="center" margin="5px 0px">{alertData.content}</P>
        <ModelButtonGroup>
          {alertData.buttons.map((b, i) => (
            b.type === 'primary'
              ? (
                <PrimaryBtn type="button" small key={b.id} className="button secondary model-close" onClick={() => dispatch(closeAlert(b.value))}>
                  {b.icon && <i className={b.icon} />}
                  {b.title}
                </PrimaryBtn>
              )
              : (
                <Button type="button" small key={b.id} className="button secondary model-close" onClick={() => dispatch(closeAlert(b.value))}>
                  {b.icon && <i className={b.icon} />}
                  {b.title}
                </Button>
              )


          ))}
        </ModelButtonGroup>
      </ModelBox>
    </Cover>
  );
}
