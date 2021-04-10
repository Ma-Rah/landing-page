import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import {
  FaYoutube,
  FaSearch,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
} from "react-icons/fa";
import { SiMdnwebdocs } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <div className="App">
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center "
      >
        <Row className="my-2">
          <form action="https://www.youtube.com/results">
            <Col>
              <label htmlFor="youtube">YouTube</label>
              <a href="https://www.youtube.com" rel="noreferrer">
                <FaYoutube className="text--red ml-2" />
              </a>
            </Col>
            <Col>
              <input
                type="text"
                name="search_query"
                id="youtube"
                placeholder="Search"
              />
              <button className="bg-dark border border-dark ">
                <FaSearch className="text-white mb-1" />
              </button>
            </Col>
          </form>
        </Row>

        <Row className="my-2">
          <form action="https://www.google.com/search">
            <Col>
              <label htmlFor="google">Google</label>
              <a href="https://www.google.com" rel="noreferrer">
                <FcGoogle className="mb-1 ml-2" />
              </a>
            </Col>
            <Col>
              <input type="text" name="q" id="google" placeholder="Search" />
              <button className="bg-dark border border-dark ">
                <FaSearch className="text-white mb-1" />
              </button>
            </Col>
          </form>
        </Row>

        <Row className="my-2">
          <form action="https://developer.mozilla.org/en-US/search">
            <Col>
              <label htmlFor="mdn">MDN Web Docs</label>
              <a href="https://developer.mozilla.org/en-US/" rel="noreferrer">
                <SiMdnwebdocs className="text--black bg-white mb-1 ml-2" />
              </a>
            </Col>
            <Col>
              <input type="text" name="q" id="mdn" placeholder="Search" />
              <button className="bg-dark border border-dark ">
                <FaSearch className="text-white mb-1" />
              </button>
            </Col>
          </form>
        </Row>
        <Row className="d-flex justify-content-evenly my-4">
          <Col className="text-center">
            <a
              href="https://github.com/Ma-Rah"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              <h6 className="my-0">GitHub</h6>

              <FaGithub />
            </a>
          </Col>
          <Col className="text-center">
            <a
              href="https://www.linkedin.com/in/martin-rahm-913856b0/"
              rel="noreferrer"
              className="text-white text-decoration-none "
            >
              <h6 className="my-0">LinkedIn</h6>

              <FaLinkedin />
            </a>
          </Col>
          <Col className="text-center ">
            <a
              href="https://marah.netlify.app/"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              <h6 className="my-0">Portfolio</h6>

              <FaBriefcase />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
