import styled from 'styled-components';
import { H1, P } from '../Basic/Text';
import { device } from '../../style';

export const InfoTitle = styled(H1)`
    margin:0px;
    padding:28px 0px;
    font-family: "FredokaOne";
    font-size: ${(props) => props.size || '6.5rem'};
    color: ${(props) => props.theme.primary};

    @media ${device.xs}{
        font-size: 3.50rem;
    }
    @media ${device.sm_lg}{
        font-size: 4.50rem;
    }
`;

export const InfoText = styled(P)`
    width: 500px;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.3em;
    font-weight: 500;

    @media ${device.xs_lg}{
        width: auto;
    }
    @media ${device.xs_sm}{
        font-size: 1rem;
        margin: 0px;
        padding: 0px;
    }
`;
