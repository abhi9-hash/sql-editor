import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

/**
 * The component to display the buttons in the query space.
 * @returns {JSX.Element}
 * @constructor
 */
function QueryButtons() {
  const buttons = [
    {
      icon: faPlay,
      title: "Run Query",
    }
  ].map(({ icon, title }, index) => (
    <Button
      size={"sm"}
      variant={"outline-primary"}
      style={{
        borderRadius: 0,
        padding: "0.5rem",
      }}
      className={"mr-2 query-button"}
      key={index}
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </Button>
  ));
  return (
    <ButtonToolbar className="mb-3 mt-3">
      <ButtonGroup className="me-2">{buttons}</ButtonGroup>
    </ButtonToolbar>
  );
}

export default QueryButtons;
