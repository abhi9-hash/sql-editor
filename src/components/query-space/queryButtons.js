import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

function QueryButtons() {
  return (
    <ButtonToolbar className="mb-2 mt-3 glass">
      <ButtonGroup className="ml-2">
        <Button
          size={"sm"}
          style={{
            borderRadius: 0,
            padding: "0.5rem",
            color:'#0d6efd',
            backgroundColor:'transparent',
            borderColor:'transparent'
          }}
          className={"m-2"}
        >
          <FontAwesomeIcon icon={faPlay} /> Run Query
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default QueryButtons;
