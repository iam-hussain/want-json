import styled from 'styled-components';
import { device } from '../../style';
import { Button } from './Button/Button';
import { P } from './Text';

export const FrontIcon = styled.div`
    transition: all 0.6s ease-in-out 0s;
    background-color: transparent;
    align-self: center;
    color: ${(props) => (props.active ? props.theme.primary : props.theme.text3)};
    min-width: 25px;
`;

export const ListTitle = styled(P)`
    background-color: transparent;
    align-self: center;
    font-family: "Rajdhani";
    text-transform: uppercase;
`;


export const URL = styled(P)`
    background-color: transparent;
    align-self: center;
    font-size: 0.7rem;
    font-family: "Rajdhani";

    @media ${device.web}{
        &:hover{
            cursor: pointer;
            color: ${(props) => props.theme.secondary};
        }
    }

`;

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    transition: all 0.6s ease-in-out 0s;
    background-color: transparent;
`;

export const ListAction = styled.div`
    display: flex;
    flex-direction: row;
    transition: all 0.6s ease-in-out 0s;

    @media ${device.xs_sm}{
        flex-direction: column;
    }
`;
export const Action = styled(Button)`
    background-color: transparent;
    color: ${(props) => props.theme.text2};
    padding: 2px;
    margin: 2px;
    width: auto;
    @media ${device.web}{
        &:hover{
            color: ${(props) => props.theme.primary};
        }
    }
`;


export const List = styled.ul`
    width: 100%;
    color: ${(props) => props.theme.text1};
    font-weight: 600;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0;
    justify-content: space-between;
    margin-bottom: 28px;
    text-align: center;
    transition: all 0.6s ease-in-out 0s;
`;

export const ListItem = styled.li`
    width: 49%;
    background-color: ${(props) => props.theme.tertiary};
    border-radius: 5px;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 10px;
    transition: all 0.3s ease-in-out 0s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: ${(props) => props.theme.shadow};

    @media ${device.xs_md}{
        width:  100%;
        margin: 5px;
    }

    @media ${device.web}{
        &:hover{
            background-color: ${(props) => props.theme.paper};
            color: ${(props) => props.theme.primary};
            ${ListTitle}{
                color: ${(props) => props.theme.primary};
            }
        }
    }
`;
