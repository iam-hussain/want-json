import styled from 'styled-components';
import { H1, P } from '../Basic/Text';
import { device } from '../../style';

export const InfoTitle = styled(H1)`
    margin:0px;
    padding:28px 0px;
    font-family: "FredokaOne";
    cursor: pointer;
    font-size: ${(props) => props.size || '6.5rem'};
    color: ${(props) => props.theme.primary};

    @media ${device.xs}{
        font-size: 3.50rem;
        padding: 15px 0px;
    }
    @media ${device.sm_lg}{
        font-size: 4.50rem;
        padding: 20px 0px;
    }
`;

export const InfoText = styled(P)`
    width: 500px;
    margin: 0;
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 500;

    @media ${device.xs_lg}{
        width: auto;
    }
    @media ${device.xs_sm}{
        font-size: 16px;
        margin: 0px;
        padding: 0px;
    }
`;

export const Contribute = styled.a`
    color: ${(props) => props.theme.text2};
    font-size: ${(props) => props.size || '2rem'};
    margin: ${(props) => props.margin || '0px'};
    transition: all 0.6s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.margin || '0px'};

    &:not([href]) {
        color: ${(props) => props.theme.text2};
        @media ${device.web}{          
            &:hover{      
                color: ${(props) => props.theme.primary};
          }
        }
    }
    
    ${P}{
        font-family: "Rajdhani";
        text-transform: uppercase;
        text-align: center;
    }

    @media ${device.web}{          
        &:hover{      
            color: ${(props) => props.theme.primary};
            text-decoration: none;
            cursor: pointer;
            ${P}{
                color: ${(props) => props.theme.primary};
                text-decoration: none;
                cursor: pointer;
            }
      }
`;
