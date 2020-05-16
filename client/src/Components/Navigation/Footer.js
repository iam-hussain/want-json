import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faHeart, faHome, faLaptopCode, faBook, faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container } from '../Basic/Wrapper';
import { buttonPush } from '../Basic/Animation';
import { device } from '../../style';

export const FooterElement = styled.footer`
    z-index: 1;
    background-color: ${(props) => props.theme.bg};width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    position: static;
    bottom: 0px;
    font-family: "Rajdhani";
    margin-top: auto;
    color: ${(props) => props.theme.text1};
    transition: all 0.6s ease-in-out 0s;
    box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-box-shadow: 0 0 28px 0 rgba(94, 92, 154, .12);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media ${device.xs_sm}{
        display: none;
    }
`;

export const Left = styled.div`
    text-align: right;
    font-size: 14px;
    transition: all 0.6s ease-in-out 0s;
    svg{
        margin: 0px 5px;
        color: ${(props) => props.theme.text2};
        @media ${device.web}{
            &:hover{
                color : ${(props) => props.theme.primary};
                cursor: pointer;
            }
        }
    }
    
`;

export const Right = styled.div`
    text-align: right;
    font-size: 14px;
    transition: all 0.6s ease-in-out 0s;
    color: ${(props) => props.theme.text2};
    svg{
        margin: 0px 5px;
        color: #F20574;
        @media ${device.web}{          
            &:hover{
                animation: ${buttonPush} .3s ease-in-out;
                cursor: pointer;
            }
        }
    }
`;


export default function Footer() {
  return (
    <FooterElement>
      <Container padding="0px 15px" justify="space-between">
        <Left>
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faLaptopCode} />
          <FontAwesomeIcon icon={faBook} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faAddressCard} />
        </Left>
        <Right>
          <FontAwesomeIcon icon={faCode} />
          with
          <FontAwesomeIcon icon={faHeart} />
          by ZaHu
        </Right>
      </Container>
    </FooterElement>
  );
}
