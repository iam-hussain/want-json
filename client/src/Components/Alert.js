/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { transitions, positions } from 'react-alert';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle, faCheckCircle, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Basic/Button/Button';

export const alretOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 4000,
  offset: '10px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100,
  },
};

export const Wrapper = styled.div`
    cursor: pointer;
    margin: 5px 20px; 
    background-color: ${(props) => (props.type === 'success' ? props.theme.success : props.type === 'error' ? props.theme.error : props.theme.info)};
    color: ${(props) => props.theme.bg};
    padding: 5px 10px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    font-family: "Rajdhani";
    box-sizing: border-box;
`;

export const Message = styled.div`
    flex: 1;
    margin-right: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const TypeIcon = styled.div`
    color: ${(props) => props.theme.bg};
    margin-right: 10px;
`;

export const CloseButton = styled(Button)`
    width: auto;
    padding: 0px;
    background-color: transparent;
    color:  ${(props) => props.theme.bg};
`;

export default function AlertBox(_ref) {
  const {
    message, options, close,
  } = _ref;
  return (
    <Wrapper type={options.type}>
      <TypeIcon>
        {options.type === 'success' ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faExclamationCircle} />}
      </TypeIcon>
      <Message>{message}</Message>
      <CloseButton type="button" onClick={() => close()}><FontAwesomeIcon icon={faTimes} /></CloseButton>
    </Wrapper>
  );
}

// export default function AlertTemplate(_ref) {
//   const { message } = _ref;
//   const { options } = _ref;
//   const { style } = _ref;
//   const { close } = _ref;

//   return React.createElement(
//     'div',
//     { style: { ...style } },
//     options.type === 'info' && React.createElement(InfoIcon, null),
//     options.type === 'success' && React.createElement(SuccessIcon, null),
//     options.type === 'error' && React.createElement(ErrorIcon, null),
//     React.createElement(
//       'span',
//       { style: { flex: 2 } },
//       message,
//     ),
//     React.createElement(
//       'button',
//       { onClick: close, style: buttonStyle, type: 'button' },
//       React.createElement(CloseIcon, null),
//     ),
//   );
// }
