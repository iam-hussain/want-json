import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-json';
let data = [{id:'aa', sd: 'sds'},{id:'aa', sd: 'sds'},{id:'aa', sd: 'sds'},{id:'aa', sd: 'sds'},{id:'aa', sd: 'sds'},{id:'aa', sd: 'sds'}, {id:'aa'}, {id:'ab'}]
const code = JSON.stringify(data, null, 4)
;
 
export default class EditorApp extends React.Component {
  state = { code };

  handleChange = (code) => {
    console.log(typeof code, "===Code===", code)
    try{
        let o = JSON.parse(code);
        if (typeof o === "object") {
            console.log("I am object")
        }else{
            console.log("NO")
        }
    }catch(err){
        console.log("Error")
    }
    this.setState({ code })  
  }
 
  render() {
    return (
      <Editor
        name={'data'}
        value={this.state.code}
        onValueChange={code => this.handleChange(code)}
        highlight={code => highlight(code, languages.json)}
        padding={10}
        textareaClassName={'code-textbox code-box'}
        preClassName={'code-pre code-box'}
        style={{
            height: '300px',
            margin: '10px',
            overflow: 'auto',
            background: '#060940',
            fontFamily: 'monospace',
            fontSize: '14px',
            'line-height': '20px'
        }}
      />
    );
  }
}