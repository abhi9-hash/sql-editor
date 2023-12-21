import { Fragment } from "react";

import {UnControlled as CodeMirror} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";

function QuerySpace(props) {

  return (
    <Fragment style={{zIndex:-8888}}>
      <CodeMirror
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
      />
    </Fragment>
  );
}

export default QuerySpace;
