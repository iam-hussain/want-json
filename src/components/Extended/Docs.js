import styled from 'styled-components';
import { device } from '../../style';
import { ListItem } from '../Basic/List';
import {
  H3, H1, H2, ASpan, H5,
} from '../Basic/Text';

export const Article = styled.article`
    width: 90%;
    padding: 10px;

    @media ${device.xs_sm}{
        width: 100%;
    }
`;

export const DocH1 = styled(H1)`
    padding: 15px 0px;
    margin: 0px 0px 15px;
    color: ${(props) => props.theme.primary};
`;

export const DocH2 = styled(H2)`
    padding: 10px 0px;
    color: ${(props) => props.theme.text1};
    font-size: 1.6rem;
    position: relative;

    @media ${device.xs_md}{
        font-size: calc(${(props) => props.size || '1.6rem'} - 0.2rem);
    }
`;

export const DocH3 = styled(H3)`
    padding: 10px 0px;
    font-size: 1.3rem;
    color: ${(props) => props.theme.text2};
    position: relative;

    @media ${device.xs_md}{
        font-size: calc(${(props) => props.size || '1.3rem'} - 0.2rem);
    }
`;

export const DocH5 = styled(H5)`
    padding: 10px 0px;
    color: ${(props) => props.theme.text2};
    position: relative;
`;

export const ArticleContent = styled.article`
    padding-left: 10px;
`;

export const Content = styled.div`
    padding: 10px 0px;
    padding-left: 15px;
    text-align: justify;
    color: ${(props) => props.theme.text2};

    @media ${device.xs_md}{
        padding: 10px 0px;
    }
`;

export const DocSpan = styled.span`
    color: ${(props) => props.theme.secondary};
`;

export const DocP = styled.p`
    padding: 10px 0px;
    text-align: justify;
    font-size: 1rem;
    color: ${(props) => props.theme.text2};
    letter-spacing: 1.5px;
    line-height: 35px;
`;

export const Note = styled.div`
    padding: 15px;
    margin: 0px 0px 20px;
    text-align: justify;
    max-width: 100%;
    background: ${(props) => props.theme.paper};
    border-left: 2px solid;
    border-color: ${(props) => props.theme.secondary};    word-break: break-all;

    &:before {
        content: ${(props) => (props.header ? `'${props.header}'` : "'Note & Tip'")};
        color: 
        display: block;
        text-transform: uppercase;
        font-family: Colfax,Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: .833rem;
        letter-spacing: .7px;
    }

    ${DocP}{
        margin: 0px;
        padding: 0px;
        text-align: end;
    }
`;

export const Heading = styled(H1)`
    padding: 15px 0px;
    margin: 0px;
    color: ${(props) => props.theme.primary};
    position: relative;
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 85%;
        width: 100%;
        height: 4px;
        background: ${(props) => props.theme.text3};
        left: 1em;
    }
`;

export const SubHeading = styled(H2)`
    padding: 10px 0px;
    color: ${(props) => props.theme.text1};
    font-size: 1.5rem;
    position: relative;
`;

export const DocASpan = styled(ASpan)`
    font-size: 1rem;
    color: ${(props) => props.theme.secondary};
`;

export const Highlight = styled.span`
    background: ${(props) => props.theme.tertiary};
    border-radius: 5px;
    padding: 2px 5px;
    color: ${(props) => props.theme.secondary};
`;

export const BlockQuote = styled.blockquote`
    position: relative;
    padding-left: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.text2};s
    padding: 18px 18px 0px;
    margin: 18px 18px 0px;
    font-size: 14px;
    &:before {
        content: "“";
        font-family: serif;
        position: absolute;
        right: 100%;
        font-size: 80px;
        line-height: 0px;
        top: 50px;
        color: ${(props) => props.theme.secondary};
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        width: 80px;
        height: 5px;
        background: ${(props) => props.theme.primary};
        left: 1em;
    }
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


export const FrontIcon = styled.span`
    transition: all 0.6s ease-in-out 0s;
    background-color: transparent;
    align-self: center;
    margin: 0px 5px;
    color: ${(props) => (props.active ? props.theme.primary : props.theme.text3)};
    min-width: 25px;
`;
