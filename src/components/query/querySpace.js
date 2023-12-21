import { Fragment } from "react";

import {UnControlled as CodeMirror} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";

function QuerySpace(props) {
  return (
    <Fragment>
      <CodeMirror
        style={{ maxHeight: "20rem", marginBottom: "3rem", position:'fixed' }}
        value={props.defaultQuery}
        options={{
          mode: "sql",
          theme: "cobalt",
          lineNumbers: true,
        }}
      />
    </Fragment>
  );
}

export default QuerySpace;
