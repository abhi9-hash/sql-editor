import QueryButtons from "../query-space/queryButtons";
import Row from "react-bootstrap/Row";
import QueryEditor from "../query-space/queryEditor";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ResultsTable from "../table/resultsTable";
import SideNavTable from "../table/sideNavTable";
import { Fragment } from "react";
import useFetchData from "../../hooks/useFetchData";

function TabPane({ tab }) {
  const { result, isLoaded, error, timeOfRequest } = useFetchData(tab.title);
  return (
    <Fragment>
      <QueryButtons />
      <Row
        style={{
          width: "100%",
          height: "20vh",
        }}
      >
        <QueryEditor defaultQuery={tab.defaultQuery} />
      </Row>
      <hr />
      <Tabs defaultActiveKey="results" className="mb-3">
        <Tab eventKey="results" title="Results">
          <ResultsTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
            timeOfRequest={timeOfRequest}
          />
        </Tab>
        <Tab eventKey="columns" title="Columns">
          <SideNavTable
            result={result}
            isLoaded={isLoaded}
            error={error}
            tab={tab}
          />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default TabPane;
