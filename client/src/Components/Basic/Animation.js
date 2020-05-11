import { keyframes } from 'styled-components';

export const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const bounce = keyframes`
    0%,
    100% {
        transform: scale(0.0);
    }

    50% {
        transform: scale(1.0);
    }
`;

export const jump = keyframes`
    0%,
    100% {
        top: 0px;
    }

    50% {
        top: 15px;
    }
`;


export const buttonPush = keyframes`
    50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;


export const fadeIn = keyframes`
    from {
        z-index: -10;
        filter: grayscale(0%);
        opacity: 0;
    }
    to {
        z-index: 10;
        filter: grayscale(80%);
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
     }
    to {
        opacity: 0;
    }
`;
