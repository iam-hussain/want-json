import styled from 'styled-components';

export const Brand = styled.p`
  font-family: "FredokaOne";
  font-size: ${(props) => props.size || '1.5rem'};
  padding: ${(props) => props.padding || '0 10px'};
  margin: ${(props) => props.margin || '0px'};
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const P = styled.p`
  font-family: ${(props) => props.font || 'Josefin_Sans'};
  font-size: ${(props) => props.size || '1rem'};
  padding: ${(props) => props.padding || '0 10px'};
  margin: ${(props) => props.margin || '0px'};
  color: ${(props) => props.color || props.theme.text2};
  text-transform: ${(props) => props.transform || 'unset'};
  font-weight: ${(props) => props.weight || 'unset'};
  cursor: ${(props) => props.cursor || 'unset'};
  text-align: ${(props) => props.align || 'left'};
  transition: all 0.6s ease-in-out 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const H1 = styled.h1`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '2rem'};
    padding: ${(props) => props.padding || '0 10px'};
    margin: ${(props) => props.margin || '20px 0'};
    color: ${(props) => props.color || props.theme.text2};
    text-transform: ${(props) => props.transform || 'unset'};
    font-weight: ${(props) => props.weight || '500'};
    cursor: ${(props) => props.cursor || 'unset'};
    text-align: ${(props) => props.align || 'left'};
    transition: all 0.6s ease-in-out 0s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;


export const H2 = styled.h2`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '1.5rem'};
    padding: ${(props) => props.padding || '0 10px'};
    margin: ${(props) => props.margin || '20px 0'};
    color: ${(props) => props.color || props.theme.text1};
    text-transform: ${(props) => props.transform || 'unset'};
    font-weight: ${(props) => props.weight || '500'};
    cursor: ${(props) => props.cursor || 'unset'};
    text-align: ${(props) => props.align || 'left'};
    transition: all 0.6s ease-in-out 0s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
