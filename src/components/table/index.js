import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Pagination from "react-bootstrap/Pagination";
import Alert from "react-bootstrap/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";

function BaseTable(props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: props.columns,
      data: props.data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  if (!props.isLoaded) {
    return (
      <Container className="h-100">
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" as="span" />
          Loading...
        </Row>
      </Container>
    );
  } else if (props.error !== null) {
    return (
      <Container className="h-100">
        <Row className="justify-content-center h-100 align-items-center">
          <h4 className="text-secondary text-center align-self-center">
            Could not load results
          </h4>
        </Row>
      </Container>
    );
  }

  const dropdownItems = [5, 10, 15, 20, 25].map((numEntries) => (
    <option value={numEntries} key={numEntries}>
      {numEntries}
    </option>
  ));

  const entriesDropdown = (
    <FloatingLabel label="No. of entries per page">
      <Form.Select
        onChange={(e) => {
          setPageSize(parseInt(e.target.value));
        }}
        defaultValue={pageSize}
        disabled={page.length === 0}
        id="numEntriesPerPage"
      >
        {dropdownItems}
      </Form.Select>
    </FloatingLabel>
  );

  const pageControls = (
    <Pagination size={"lg"} className="justify-content-center">
      <Pagination.First
        disabled={pageIndex === 0}
        onClick={() => gotoPage(0)}
      />
      <Pagination.Prev disabled={!canPreviousPage} onClick={previousPage} />

      <Pagination.Next disabled={!canNextPage} onClick={nextPage} />
      <Pagination.Last
        disabled={pageIndex === pageCount - 1}
        onClick={() => gotoPage(pageCount - 1)}
      />
    </Pagination>
  );

  const resultStats = (
    <Col lg={3}>
      <Alert variant={"success"}>
        <FontAwesomeIcon icon={faCheck} /> Fetched{" "}
        <strong>{rows.length}</strong> results in{" "}
        <strong>{props.timeOfRequest / 1000}</strong> seconds
      </Alert>
    </Col>
  );

  const finalResult = props.paginate ? page : rows;

  return (
    <Container fluid className="h-80 p-3 glass">
      <Row>
        {props.timeOfRequest ? resultStats : <></>}
        <Col lg={3}>
          <FloatingLabel label="Search to filter results">
            <Form.Control
              placeholder="Text input to filter results"
              onInput={(e) => {
                setGlobalFilter(e.target.value);
              }}
              id="filterInput"
              // disabled={rows.length === 0}
            />
          </FloatingLabel>
        </Col>
        <Col lg={3}>{props.paginate ? entriesDropdown : <></>}</Col>
        <Col lg={3}>
          {" "}
          {rows.length !== 0 && (
            <CSVLink
              size={"sm"}
              variant={"outline-primary"}
              style={{
                textDecoration: "none",
                borderRadius: 0,
                padding: "0.5rem",
                borderColor: "inherit",
              }}
              data={rows}
              filename={"my-file.csv"}
              className="btn btn-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} /> {"Download data as CSV"}
            </CSVLink>
          )}
        </Col>
      </Row>
      <Row
        style={{
          maxHeight: "29vh",
          overflowY: "auto",
          overflowX: "auto",
        }}
        className="mt-3"
      >
        <Table {...getTableProps()} striped hover size={"sm"} className="h-100">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}{" "}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {finalResult.map((row) => {
              prepareRow(row);
              return (
                <tr>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row className="mt-2">
        <Col>{props.paginate ? pageControls : <></>}</Col>
      </Row>
    </Container>
  );
}

export default BaseTable;
