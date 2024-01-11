import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { openNewTab } from "../../utils";
import { ReactComponent as Logo } from "../../images/logo.svg";

function Header(props) {
  return (
    <Navbar className="shadow" style={{backgroundColor:"transparent"}} >
      <Container fluid className="glass">
        <Navbar.Brand href="#home">
          <Logo width={100} />
        </Navbar.Brand>
        <Navbar.Text>
          <Button
            variant={"outline-primary"}
            onClick={() => {
              openNewTab(
                `Query ${props.queryCount}`,
                [],
                props.tabs,
                props.setTabs,
                props.setActiveKey
              );
              props.setQueryCount(props.queryCount + 1);
            }}
            style={{
              marginRight: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> New Query
          </Button>
          <Button
            variant={"outline-primary"}
            className="d-lg-none"
            onClick={() => {
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            aria-controls="sidebar"
            aria-expanded={props.sidebarOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
