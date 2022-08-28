import React from "react";
import "./Experience.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Experience() {
  return (
    <div>
      <Container>
        <p className="px-4 h1 fw-bolder">My Experience</p>
        <p className="px-4 h3 mt-3 fw-bolder text-secondary">
          Education & Skills
        </p>
        <Row lg={2} className="pt-5">
          <Col lg={6} className=" p-4 d-flex flex-column align-items-start justify-content-center">
            <p className="fw-bold h3">Education</p>
            <ul>
              <li className="fw-bold">
                <p>2020-2021</p>
                <p>Ph.D in Horriblensess - Harvard University, Cambridge, MA</p>
              </li>
              <li className="fw-bold">
                <p>2018-2019</p>
                <p>Computer Science - Imperialize Technical Institute</p>
              </li>
              <li className="fw-bold">
                <p>2016-2018</p>
                <p>Graphic Designer - Web Graphy, Los Angeles, CA</p>
              </li>
            </ul>
          </Col>
          <Col lg={6} className="p-3">
            <p className="fw-bold h3">Skills</p>
            <label className=" d-flex justify-content-between align-items-center">
              <p className=" fw-bold m-0" >web designer</p>
              <p className=" fw-bold m-0" >50%</p>
            </label>
            <input
              type="range"
              value="50%"
              className="w-100 mt-0 my-3 border"
            />
             <label className=" d-flex justify-content-between align-items-center">
              <p className=" fw-bold m-0" >web designer</p>
              <p className=" fw-bold m-0" >50%</p>
            </label>
            <input type="range" value="50%" className="w-100 mt-0 my-3 borde" />
            <label className=" d-flex justify-content-between align-items-center">
              <p className=" fw-bold m-0" >web designer</p>
              <p className=" fw-bold m-0" >50%</p>
            </label>
            <input type="range" value="50%" className="w-100 mt-0 my-3 borde" />
            <label className=" d-flex justify-content-between align-items-center">
              <p className=" fw-bold m-0" >web designer</p>
              <p className=" fw-bold m-0" >50%</p>
            </label>
            <input type="range" value="50%" className="w-100 mt-0 my-3 borde" />
            <label className=" d-flex justify-content-between align-items-center">
              <p className=" fw-bold m-0" >web designer</p>
              <p className=" fw-bold m-0" >50%</p>
            </label>
            <input type="range" value="50%" className="w-100 mt-0 my-3 borde" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
