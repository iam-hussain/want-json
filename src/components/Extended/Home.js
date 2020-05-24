import styled from 'styled-components';
import { device } from '../../style';
import { H1, P } from '../Basic/Text';
import { Button } from '../Basic/Button/Button';
import { RowWrapper, ColWrapper, Container } from '../Basic/Wrapper';
import { Keywords, APITable } from '../Payload';

export const HeroRowWrapper = styled(RowWrapper)`
    min-height: calc(100vh - 170px);
    margin: 28px 0px 0px;
    @media ${device.xs_lg}{
        min-height: auto;
    }
`;

export const HeroColWrapper = styled(ColWrapper)`
    text-align: center;
    padding: 0px 5px;
    @media ${device.xs_md}{
        padding: 0px !important;
    }

`;

export const BoxRow = styled(RowWrapper)`
    background-color: ${(props) => props.theme.bg};
    background: ${(props) => props.background || props.theme.bg};
`;

export const HeroImg = styled.img`
    max-height: 350px;
    @media ${device.xs_lg}{
        min-height: auto;
        width: 60%;
    }
`;

export const HeroTitle = styled(H1)`
    color: ${(props) => props.theme.primary};    
    padding: 28px 0px;
    font-family: "Rajdhani";
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;

    @media ${device.xs_sm}{
        padding: 20px 0px 10px;
    }
`;

export const HeroText = styled(P)`
    padding: 0px 0px 28px;
    text-align: center;
    max-width: 460px;
    margin: auto;

    span{
        color: ${(props) => props.theme.secondary};
        font-weight: 700;
        font-family: "Rajdhani";
    }

    @media ${device.xs_sm}{
        padding: 0px 0px 10px;
    }
`;

export const Text = styled(P)`
    text-align: center;
    max-width: ${(props) => props.maxWidth || 'auto'};
    margin: auto;

    span{
        color: ${(props) => props.theme.secondary};
        font-weight: 700;
        font-family: "Rajdhani";
    }
`;

export const HeroButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    @media ${device.xs_sm}{
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;

export const HomeContainer = styled(Container)`
    justify-content: center;
    flex-direction: column;
`;

export const MethodGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media ${device.xs_sm}{
        justify-content: start;
    }
`;

export const MethodTable = styled(APITable)`
    width: 100%;
    td{
        background-color: ${(props) => props.theme.bg}; 
        width: auto;
        &:first-child{
            border-color: ${(props) => props.theme.text1};
            width: auto;
        }
        &:last-child{
            border-color: ${(props) => props.theme.text1};
            width: auto;
        }
    }
    @media ${device.xs_md}{
        width: 100%;
    }
`;

export const Methods = styled(Keywords)`
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        background-color: ${(props) => (props.active ? props.theme.primary : props.theme.secondary)};    
        cursor: pointer;
    }
`;

export const MethodButton = styled(Button)`
    padding: 2px 7px;
    margin: 2px;
    width: 90px;
    font-size: 12px;
    font-weight: 200;
    line-height: 15px;
    // border: 1px solid;
    // border-color: ${(props) => props.theme.bg};
    color: ${(props) => (props.active ? props.theme.tertiary : props.theme.text2)};
    background-color: ${(props) => (props.active ? props.theme.primary : props.theme.paper)};    
    cursor: pointer;

    @media ${device.web}{          
        &:hover{      
            color: ${(props) => (props.active ? props.theme.tertiary : props.theme.primary)};
            background-color: ${(props) => (props.active ? props.theme.primary : props.theme.tertiary)};
      }
`;
