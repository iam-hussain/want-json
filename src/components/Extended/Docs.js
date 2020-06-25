import styled from 'styled-components';
import { device } from '../../style';
import { ListItem } from '../Basic/List';
import { H3, H4, P } from '../Basic/Text';

export const Article = styled.article`
    width: 90%;
    padding: 10px;

    @media ${device.xs_sm}{
        width: 100%;
    }
`;

export const ArticleContent = styled.article`
    padding-left: 10px;
`;

export const Heading = styled(H3)`
    padding: 15px 0px;
    color: ${(props) => props.theme.primary};
`;

export const SubHeading = styled(H4)`
    padding: 10px 0px;
    color: ${(props) => props.theme.text1};
    font-size: 1.3rem;
`;

export const Content = styled(P)`
    padding: 10px 0px;
    text-align: justify;
    color: ${(props) => props.theme.text2};
`;


export const Highlight = styled.span`
    background: ${(props) => props.theme.tertiary};
    border-radius: 5px;
    padding: 2px 5px;
    color: ${(props) => props.theme.secondary};
`;


export const BlockQuote = styled.blockquote`
    color: ${(props) => props.theme.info};
    border-radius: 5px;
    background-color: ${(props) => props.theme.tertiary};
    box-shadow: 0px 5px 15px -1px rgba(2, 83, 115, .2);
    width: 80%;
    padding: 0px 20px;
    line-height: 30px;
    font-size: 13px;
    // border: 1px solid;
    // border-color: ${(props) => props.theme.primary};
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
