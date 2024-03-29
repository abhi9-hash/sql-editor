import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import { closeTab } from "../../utils";
import TabPane from "./tabPane";

function QueryTabs(props) {
  const tabs = props.tabs.map((tab) => (
    <Nav.Item key={tab.eventKey}>
      <Nav.Link
        eventKey={tab.eventKey}
        active={props.activeKey === tab.eventKey}
        href={tab.href}
      >
        {tab.title}{" "}
        <CloseButton
          style={{
            fontSize: "0.5rem",
          }}
          onClick={(e) => {
            // If it's not stopped here, the active key will be changed yet again.
            e.stopPropagation();
            const [newTabs, newActiveKey] = closeTab(tab.eventKey, props.tabs);
            props.setTabs(newTabs);
            props.setActiveKey(newActiveKey);
          }}
        />
      </Nav.Link>
    </Nav.Item>
  ));

  const tabPanes = props.tabs.map((tab) => (
    <Tab.Pane
      eventKey={tab.eventKey}
      active={props.activeKey === tab.eventKey}
      key={tab.eventKey}
    >
      <TabPane tab={tab} />
    </Tab.Pane>
  ));

  // If there are no open tabs currently.
  if (props.tabs.length === 0) {
    return (
      <Container className="h-100">
        <Row className="justify-content-center h-100 align-items-center">
          <h4 className="text-secondary text-center align-self-center">
            Please run a query to see data.
          </h4>
        </Row>
      </Container>
    );
  }

  return (
    <Tab.Container
      onSelect={(activeKey) => {
        props.setActiveKey(activeKey === null ? "" : activeKey);
      }}
      className="glass"
    >
      <Row>
        <Nav variant="tabs">{tabs}</Nav>
      </Row>
      <Tab.Content>{tabPanes}</Tab.Content>
    </Tab.Container>
  );
}

export default QueryTabs;
