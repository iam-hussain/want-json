/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const CodeViewWrapper = styled.div`
    word-break: break-all;
    flex: 1;
    background-color: ${(props) => props.theme.code};
    width: 100%;
    margin: ${(props) => props.margin || '28px 0px'};
    padding: 0px;
    box-shadow: ${(props) => props.theme.shadow};

    pre{
        min-height: ${(props) => props.height || '300px'};
        height: ${(props) => props.height || '300px'};
        overflow: auto;
        margin: 0px;
        padding: 10px;
        text-align: left;

        &::-webkit-scrollbar-track {
            background-color: #000;
            margin: 4px 0;
        }
    
        &::-webkit-scrollbar {
            background-color: #000;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.primary}; 
        }
    }
`;


export default function CodeView({ code, height, margin }) {
  return (
    <CodeViewWrapper height={height} margin={margin}>
      <JSONPretty data={code} />
    </CodeViewWrapper>
  );
}
