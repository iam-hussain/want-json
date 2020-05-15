/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import { device } from '../../style';

export const CodeViewWrapper = styled.div`
    word-break: break-all;
    flex: 1;
    background-color: ${(props) => props.theme.secondary};
    width: 96%;
    margin: 28px 5px 0px;
    padding: 0px;

    pre{
        height: 350px;
        overflow: auto;
        margin: 0px;
        padding: 10px;

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

    @media ${device.xs_sm}{

    }
`;

export default function CodeView({ code }) {
  useEffect(() => {
    const codeViewer = document.getElementById('codeViewer');
    Prism.highlightAllUnder(codeViewer);
  }, []);
  return (
    <CodeViewWrapper>
      <pre id="codeViewer">
        <code className="language-json">
          {JSON.stringify(code, null, 4)}
        </code>
      </pre>
    </CodeViewWrapper>
  );
}
