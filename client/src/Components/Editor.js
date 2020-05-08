import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import '../assets/vendor/code.css';

export const CodeWrapper = styled.div`
    height: 300px;
    overflow: auto;
    border-radius: 5px;
    max-width: 100%;
    &::-webkit-scrollbar-track {
        background-color: #000;
        border-radius: 0 5px 5px 0;
        margin: 4px 0;
    }

    &::-webkit-scrollbar {
        background-color: #000;
        border-radius: 0 5px 5px 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary}; 
    }

    pre{
        min-height: 300px;
    }
`;

export default function CodeEditor() {
  const [codeIs, setCode] = useState('');
  return (
    <CodeWrapper>
      <Editor
        name="data"
        value={codeIs}
        onValueChange={(code) => setCode(code)}
        padding={10}
        highlight={(code) => highlight(code, languages.json)}
        textareaClassName="code-textbox code-box"
        preClassName="code-pre code-box"
        style={{
          'min-height': '300px',
          background: '#060940',
          fontFamily: 'monospace',
          fontSize: '14px',
          'line-height': '20px',
        }}
      />
    </CodeWrapper>
  );
}
