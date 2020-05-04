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


export const buttonPush = keyframes`
    50% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;
