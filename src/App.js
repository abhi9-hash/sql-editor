import "./App.css";
import Header from "./components/navigation/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AllTablesSidebar from "./components/navigation/all-tables";
import OpenTabsSidebar from "./components/navigation/open-tabs";
import QueryTabs from "./components/tabs";
import { useState } from "react";
import  Accordion from "@mui/material/Accordion";
import "@fontsource/raleway";
import "./index.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [tabs, setTabs] = useState([]);
  const [queryCount, setQueryCount] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        tabs={tabs}
        setTabs={setTabs}
        queryCount={queryCount}
        setQueryCount={setQueryCount}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <Accordion>
          <div>
            <AllTablesSidebar
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              tabs={tabs}
              setTabs={setTabs}
              mobile
            />
          </div>
        </Accordion>
      )}

      <Container fluid>
        <Row>
          <Col lg={2} md={3} className={"d-none d-lg-block d-xl-block"}>
            <AllTablesSidebar
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              tabs={tabs}
              setTabs={setTabs}
            />
          </Col>

          <Col
            lg={8}
            md={8}
            style={{
              padding: "1rem",
            }}
          >
            <QueryTabs
              tabs={tabs}
              setTabs={setTabs}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </Col>

          <Col
            lg={2}
            md={4}
            // className={" d-lg-block d-xl-block"}
          >
            <OpenTabsSidebar
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              tabs={tabs}
              setTabs={setTabs}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
