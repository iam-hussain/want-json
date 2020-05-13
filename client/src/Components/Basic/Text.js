import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../style';

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
  word-break: break-word;
`;

export const DimText = styled.p`
  font-family: ${(props) => props.font || 'Rajdhani'};
  font-size: ${(props) => props.size || '.8rem'};
  padding: ${(props) => props.padding || '0 10px'};
  margin: ${(props) => props.margin || '0px'};
  color: ${(props) => props.color || props.theme.text3};
  text-transform: ${(props) => props.transform || 'unset'};
  font-weight: ${(props) => props.weight || 'unset'};
  cursor: ${(props) => props.cursor || 'unset'};
  text-align: ${(props) => props.align || 'left'};
  transition: all 0.6s ease-in-out 0s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  word-break: break-word;
`;

export const H1 = styled.h1`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '2.5rem'};
    padding: ${(props) => props.padding || '0px 10px'};
    margin: ${(props) => props.margin || '0px'};
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
    @media ${device.xs_sm}{
      font-size: calc(${(props) => props.size || '2rem'} - 0.2rem);
    }
`;


export const H2 = styled.h2`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '2rem'};
    padding: ${(props) => props.padding || '0px 10px'};
    margin: ${(props) => props.margin || '0px'};
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
    @media ${device.xs_sm}{
      font-size: calc(${(props) => props.size || '2rem'} - 0.2rem);
    }
`;


export const H3 = styled.h3`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '1.75rem'};
    padding: ${(props) => props.padding || '0px 10px'};
    margin: ${(props) => props.margin || '0px'};
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
    @media ${device.xs_sm}{
      font-size: calc(${(props) => props.size || '1.75rem'} - 0.2rem);
    }
`;


export const H4 = styled.h4`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '1.5rem'};
    padding: ${(props) => props.padding || '0px 10px'};
    margin: ${(props) => props.margin || '0px'};
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
    @media ${device.xs_sm}{
      font-size: calc(${(props) => props.size || '1.5rem'} - 0.2rem);
    }
`;


export const ASpan = styled.span`
    font-family: ${(props) => props.font || "'Raleway', sans-serif"};
    font-size: ${(props) => props.size || '1rem'};
    padding: ${(props) => props.padding || '0px'};
    margin: ${(props) => props.margin || '0px'};
    color: ${(props) => props.color || props.theme.primary};
    text-transform: ${(props) => props.transform || 'unset'};
    font-weight: ${(props) => props.weight || '500'};
    cursor: ${(props) => props.cursor || 'pointer'};
    text-align: ${(props) => props.align || 'left'};
    transition: all 0.6s ease-in-out 0s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media ${device.web}{
        text-decoration: none;
    }
`;

export const HeadingWrapper = styled.div`
    font-family: "Rajdhani";
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 0px 10px 18px;
    padding-bottom: 10px;
    padding: 14px 10px;
    border-bottom: 2px solid;
    border-color: ${(props) => props.color || props.theme.secondary};
`;

// export const NotFound = styled(P)`
//   width: 100%;
//   text-align: center;
//   padding: 20px;
//   margin: 10px;
// `;


export function NotFound() {
  return (
    <P padding="20px" margin="10px">No items found !</P>
  );
}


export function SubHeadingComp({ back, title }) {
  return (
    <HeadingWrapper>
      <H4 font="Rajdhani">
        {title}
      </H4>
      {back !== '' && <Link href={back}><ASpan font="Rajdhani">Back</ASpan></Link> }
    </HeadingWrapper>
  );
}
