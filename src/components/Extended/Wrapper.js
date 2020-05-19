import styled from 'styled-components';
import { ProjectedBox } from '../Basic/Wrapper';
import { device } from '../../style';

export const CustomFormBox = styled(ProjectedBox)`
    width: 484px;
    margin: 0px;
    min-width: 300px;
    padding: 28px 64px;
    background-color: ${(props) => props.theme.bg};
    border-radius: 5px;

    @media ${device.xs_sm}{
        padding: 20px;
    }
    @media ${device.md}{
        padding: 30px;
    }
    @media ${device.xs_lg}{
        width: 100%;
    }
`;

export const InfoText = styled.p`
    width: 500px;
    margin: 30px auto 0;
    font-size: 1.125rem;
    line-height: 1.3em;
    font-weight: 500;

    @media ${device.xs_lg}{
        width: auto;
    }
    @media ${device.xs_sm}{
        margin: 0px;
    }
`;


export const BottomSeparator = styled.div`
    text-align: center;
    border-top: 2px solid;
    border-color: ${(props) => props.theme.primary}; 
    margin: 0px;
    margin-top: 28px;
    padding-top: 10px;
`;
