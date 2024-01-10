import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";

import FILE_NAMES from "../../data/fileNames";
import { openNewTab } from "../../utils";

function AllTables(props) {
  const allTables = FILE_NAMES.map((fileName) => (
    <Row className="nav-item" key={fileName}>
      <Col>
        <a
          href={`/${fileName}`}
          className={
            fileName === props.activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            openNewTab(
              fileName,
              [],
              props.tabs,
              props.setTabs,
              props.setActiveKey,
              `SELECT * FROM \`${fileName}\``
            );
          }}
        >
          <FontAwesomeIcon
            icon={fileName === props.activeKey ? faChevronDown : faChevronRight}
          />{" "}
          <FontAwesomeIcon icon={faTable} /> {fileName}
        </a>
      </Col>
    </Row>
  ));
  
  return (
    <Container
      fluid
      style={{
        height: `${props.mobile ? "100%" : "calc(100vh - 8rem)"}`,
      }}
      className="sidebar glass"
      id={`sidebar${props.mobile ? "mobile" : ""}`}
    >
      <p className="text-secondary heading mt-3">All Tables</p>
      <Container fluid className="tableLinks">
        {allTables}
      </Container>
    </Container>
  );
}

export default AllTables;
