import CloseButton from "react-bootstrap/CloseButton";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";

import { closeTab } from "../../utils";

function OpenTabs(props) {

  const openTabs = props.tabs.map((tab) => (
    <Row className="nav-item align-items-center" key={tab.eventKey}>
      <Col xs={10}>
        <a
          href={`/${tab.title}`}
          className={
            tab.eventKey === props.activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            props.setActiveKey(tab.eventKey);
          }}
        >
          <FontAwesomeIcon
            icon={
              tab.eventKey === props.activeKey ? faChevronDown : faChevronRight
            }
          />{" "}
          <FontAwesomeIcon icon={faTable} /> {tab.title}{" "}
        </a>
      </Col>
      <Col xs={2}>
        <CloseButton
          style={{
            fontSize: "0.5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            const [newTabs, newActiveKey] = closeTab(tab.eventKey, props.tabs);
            props.setTabs(newTabs);
            props.setActiveKey(newActiveKey);
          }}
        />
      </Col>
    </Row>
  ));

  return (
    <Container
      fluid
      style={{
        height: `${props.mobile ? "100%" : "calc(100vh)"}`,
      }}
      className="sidebar glass"
      id={`sidebar${props.mobile ? "mobile" : ""}`}
    >
      <p className="text-secondary heading mt-3">Open Tabs</p>
      <Container fluid className="tabLinks">
        {openTabs}
      </Container>
    </Container>
  );
}

export default OpenTabs;
