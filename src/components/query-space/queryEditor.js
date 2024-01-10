import { Fragment } from "react";

// import {UnControlled as CodeMirror} from "react-codemirror2";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode" 

import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";

function QueryEditor(props) {

  return (
    <Fragment className="glass">
        <CodeMirror
      value={props.defaultQuery}

      style={{borderRadius:'100px'}}
      height="190px"
      lang="sql"
      theme={vscodeDark}
    />
      {/* <CodeMirror
      // ref="editor"
      autoScroll
      
        style={{ maxHeight: "20rem", marginBottom: "3rem", position:'fixed', zIndex:-1000 }}
        value={props.defaultQuery}
        options={{
          mode: "sql",
          theme: 'elegant',
          lineNumbers: true,
          tabSize:10,
        }}
      /> */}
    </Fragment>
  );
}

export default QueryEditor;
