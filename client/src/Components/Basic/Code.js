/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import { CodeViewWrapper } from './Wrapper';

export function CodeBox({ code }) {
  const codeViewer = useRef(null);
  useEffect(() => {
    Prism.highlightAllUnder(codeViewer.current);
  }, []);
  return (
    <pre ref={codeViewer}>
      <code className="language-json">
        {JSON.stringify(code, null, 4)}
      </code>
    </pre>
  );
}

export default function CodeView({ code, height }) {
  return (
    <CodeViewWrapper height={height}>
      <CodeBox code={code} />
    </CodeViewWrapper>
  );
}
