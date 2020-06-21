import React, { useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight } from 'prismjs/components/prism-core';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

import {
  Label, ErrorBlock, CodeWrapper, CodeItem,
} from './Basic/Form';

export default function CodeEditor({
  setCode, codeError, setCodeError, codeString, setCodeString, type,
}) {
  const handleCodeChange = (codeIs) => {
    setCodeString(codeIs);
    try {
      const JSONCode = JSON.parse(codeIs);
      if (typeof JSONCode === 'object' && !type) {
        setCode(JSONCode);
        setCodeError({ status: false, msg: '' });
      } else if (type === 'dynamic' && !Array.isArray(JSONCode)) {
        setCodeError({ status: true, msg: 'Provide a valid Aarry format!' });
      } else if (type === 'static' && !(JSONCode instanceof Object)) {
        setCodeError({ status: true, msg: 'Provide a valid JSON format!' });
      } else if (typeof JSONCode !== 'object' && !type) {
        setCodeError({ status: true, msg: 'Provide a valid JSON format!' });
      } else {
        setCode(JSONCode);
        setCodeError({ status: false, msg: '' });
      }
    } catch (err) {
      setCodeError({ status: true, msg: 'Provide a valid JSON format!' });
    }
  };

  useEffect(() => {
    if (type) {
      handleCodeChange(codeString);
    }
  }, [type]);

  return (
    <CodeItem hasError={codeError.msg !== ''}>
      <Label hasError={codeError.msg !== ''}>JSON Code</Label>
      <CodeWrapper hasError={codeError.msg !== ''}>
        <Editor
          name="data"
          value={codeString}
          onValueChange={(codeIs) => handleCodeChange(codeIs)}
          padding={10}
          highlight={(codeIs) => highlight(codeIs, Prism.languages.json)}
          textareaClassName="code-textbox code-box"
          preClassName="code-pre code-box"
          style={{
            minHeight: '300px',
            background: '#060940',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        />
      </CodeWrapper>
      <ErrorBlock>{codeError.msg}</ErrorBlock>
    </CodeItem>

  );
}
