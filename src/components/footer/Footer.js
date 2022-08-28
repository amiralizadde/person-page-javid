import React from "react";
import "./Footer.css";
import { Container, Col, Row, Form } from "react-bootstrap";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


export default function Footer() {

  
  return (
    <div id="footerElem" className="mt-5">
      <Container
        fluid
        style={{
          backgroundColor: "rgb(0,0,0,0.5)",
        }}
      >
        <Row lg={2}>


          <Col lg={4} className="d-flex flex-column justisy-content-center align-items-start lh-lg p-5">
           <p className="h1 text-danger fw-bold">Contact </p>
           <p className="text-light h4">I happy  to send  me your message</p>
           <p className="text-bold text-light"><PhoneIcon />+981234678</p>
           <p className="text-bold text-light"><EmailIcon />javidFarazin@gmail.com</p>
           <p className="text-bold text-light"><RoomIcon />Iran khoy valiasr</p>
          </Col>



          <Col lg={8}>
            <form action="" className="p-5 ">
              <Form.Control
                type="text"
                placeholder="Name ..."
                className=" my-3  text-whi te  p-2 border-bottom "
                style={{ backgroundColor: "transparent", border: "unset" }}
              />
              <Form.Control
                type="number"
                placeholder="Phone"
                className="phone my-3 text-white  p-2 border-bottom "
                style={{ backgroundColor: "transparent", border: "unset" }}
              />
              <Form.Control
                type="email"
                placeholder="Emeil"
                className="email my-3  text-white  p-2 border-bottom"
                style={{ backgroundColor: "transparent", border: "unset" }}
              />
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message ..."
                className=" my-3 text-white   p-2 text-white border-bottom"
                style={{ backgroundColor: "transparent", border: "unset" }}
              />
              <button
                className="btn"
                style={{
                  backgroundColor: "#e0af4a",
                  padding: "10px 30px",
                  borderRadius: "unset",
                  color: "black",
                  textShadow: "0px 1px 2px black",
                }}
              >
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      
      <div id="scrollTop" className="">
        <a href="#top" style={{color:"white"}}><ArrowUpwardIcon /></a>
      </div>
    </div>
  );
}
