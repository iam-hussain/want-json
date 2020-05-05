/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Button = styled.button`
    width: ${(props) => (props.small ? '100px' : props.large ? '280px' : '180px')};
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.bg};
    padding: ${(props) => props.padding || '12px 14px'};
    margin: ${(props) => props.margin || '0px'};
    border-radius: 5px;
    font-size: ${(props) => props.size || '1rem'};
    font-weight: 700;
    overflow: hidden;
    line-height: 1;
    font-family: "Rajdhani";
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transform: translate3d(0, 0, 0);
    transition: background-color .2s ease-in-out,
                color .2s ease-in-out,
                border-color .2s ease-in-out,
                box-shadow .2s ease-in-out;

    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .3s, opacity 1s;
    }
    &:active:after {
        transform: scale(0, 0);
        opacity: .2;
        transition: 0s;
    }
    &:focus {
        outline: 0px dotted;
        outline: 0px auto -webkit-focus-ring-color;
        border-color: transparent;
    }
    &:disabled {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: ${(props) => props.theme.text3};
        background-color: ${(props) => props.theme.bg};
    }
`;

export const PrimaryBtn = styled(Button)`
    color: ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.primary};
    &:disabled {
        background-color: ${(props) => props.theme.paper1};
    }
`;

export const SecondaryBtn = styled(Button)`
    color: ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.secondary};
    &:disabled {
        background-color: ${(props) => props.theme.paper1};
    }
`;
