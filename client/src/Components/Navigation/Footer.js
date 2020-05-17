import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faHeart, faHome, faLaptopCode, faBook, faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container } from '../Basic/Wrapper';
import { buttonPush } from '../Basic/Animation';
import { device } from '../../style';
import { Anchor } from '../Basic/Text';

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
    box-shadow: ${(props) => props.theme.shadow};
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

export const Right = styled(Anchor)`
    text-align: right;
    font-size: 14px;
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
          <Link href="/"><FontAwesomeIcon icon={faHome} /></Link>
          <Link href="/explore"><FontAwesomeIcon icon={faLaptopCode} /></Link>
          <Link href="/documentation"><FontAwesomeIcon icon={faBook} /></Link>
          <Anchor href="https://github.com/ZaHuPro/getJSON" target="_blank" size="14px"><FontAwesomeIcon icon={faGithub} /></Anchor>
          <Link href="/contact_us"><FontAwesomeIcon icon={faAddressCard} /></Link>
        </Left>
        <Right href="https://github.com/ZaHuPro" target="_blank">
          <FontAwesomeIcon icon={faCode} />
          with
          <FontAwesomeIcon icon={faHeart} />
          by ZaHu
        </Right>
      </Container>
    </FooterElement>
  );
}
