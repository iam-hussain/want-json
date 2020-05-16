import styled from 'styled-components';
import { device } from '../../style';
import { ListItem } from '../Basic/List';

export const SearchForm = styled.div`
    min-width: 100%;
    position: relative;
    margin-bottom: 28px;
`;

export const Showing = styled.div`
    position: absolute;
    top: 78px;
    margin: 5px 0px;
    font-family: "Rajdhani";
    min-width: 100%;
    text-align: center;
    font-size: 14px;
    user-select: none;
    span{
        color: ${(props) => props.theme.primary};
        padding: 0px 2px;
    }
`;

export const SortGroup = styled.div`
    display: flex;
    font-family: "Rajdhani";
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.tertiary};
    border-radius: 5px;
    width: 100%;
    user-select: none;
    box-shadow: ${(props) => props.theme.shadow};
    span{
        color: ${(props) => props.theme.text3};
        @media ${device.xs_sm}{
            display: none;
        }
    }
`;

export const SortItem = styled.div`
    cursor: pointer;
    border-radius: 5px;
    min-width: 80px;
    text-align: center;
    margin: 8px;
    padding: 2px 8px;
    color: ${(props) => (props.active ? props.theme.primary : props.theme.text2)};
    background-color: ${(props) => (props.active ? props.theme.paper : props.theme.tertiary)};

    @media ${device.web}{
        &:hover{
            background-color: ${(props) => props.theme.paper};
            color: ${(props) => props.theme.primary};
        }
    }
`;


export const SearchListItem = styled(ListItem)`
    cursor: pointer;
`;
