import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

function QueryButtons() {
  return (
    <ButtonToolbar className="mb-2 mt-3">
      <ButtonGroup className="me-2">
        <Button
          size={"sm"}
          variant={"outline-primary"}
          style={{
            borderRadius: 0,
            padding: "0.5rem",
          }}
          className={"mr-2"}
        >
          <FontAwesomeIcon icon={faPlay} /> Run Query
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default QueryButtons;
