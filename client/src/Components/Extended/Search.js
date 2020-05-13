import styled from 'styled-components';

export const SearchForm = styled.div`
    min-width: 100%;
    margin: 28px 0px;
`;

export const Showing = styled.div`
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
    background-color: ${(props) => props.theme.paper1};
    border-radius: 5px;
    user-select: none;
    span{
        color: ${(props) => props.theme.text2};
    }
`;

export const SortItem = styled.div`
    cursor: pointer;
    color: ${(props) => (props.active ? props.theme.primary : props.theme.text1)};
`;
