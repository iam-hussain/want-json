import styled from 'styled-components';
import { device } from '../../style';
import { H1, P, H2 } from '../Basic/Text';
import { RowWrapper, ColWrapper, Container } from '../Basic/Wrapper';
import { Keywords, APITable } from '../Payload';

export const HeroRowWrapper = styled(RowWrapper)`
    min-height: calc(100vh - 176px);
    @media ${device.xs_lg}{
        min-height: auto;
    }
`;

export const HeroColWrapper = styled(ColWrapper)`
    text-align: center;
    padding: 0px 10px;
    @media ${device.xs_md}{
        padding: 0px;
    }
`;

export const BoxRow = styled(RowWrapper)`
    background-color: ${(props) => props.theme.bg};
    padding-top: 28px;
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

    @media ${device.xs_sm}{
        padding: 0px 0px 10px;
    }
`;

export const Text = styled(P)`
    word-spacing: 0px;
    line-height: 18px;
    text-align: justify;
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
    width: 96%;
    td{
        width: auto;
        &:first-child{
            width: auto;
        }
        &:last-child{
            width: auto;
        }
    }
`;

export const Methods = styled(Keywords)`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.xs_sm}{
        justify-content: start;
    }
    span{
        cursor: pointer;
    }
`;
