import styled from 'styled-components';
import { device } from '../../../style';

export const TabSwitch = styled.div`
    margin: 28px 0px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: "Rajdhani";
    transition: all 0.6s ease-in-out 0s;
`;


export const TabSwitchButton = styled.div`
    color: ${(props) => (props.active ? props.theme.tertiary : props.theme.text2)};
    background-color: ${(props) => (props.active ? props.theme.secondary : props.theme.bg)};
    border-top-left-radius: ${(props) => props.btlr || '0px'};
    border-bottom-left-radius: ${(props) => props.bblr || '0px'};
    border-top-right-radius: ${(props) => props.btrr || '0px'};
    border-bottom-right-radius: ${(props) => props.bbrr || '0px'};
    border: 1px solid;
    border-color: ${(props) => props.theme.secondary};
    width: 180px;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
    overflow: hidden;
    line-height: 1;
    padding: 12px 14px;

    @media ${device.xs_md}{
        width: 150px;
    }
`;
