import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
  return (
    <div className="p-sm-5">
      <div>
        <p className="h1 fw-bold">About Me _______</p>
        <p className="fs-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          eaque.
        </p>
      </div>
      <Container>
        <Row lg={2} className="p-sm-4 ">
          <Col lg={6} className=" px-md-5">
            <img
              src={require("../Image/Javid.webp")}
              className="w-100 h-100"
              alt=""
              style={{objectFit:"cover"}}
            />
          </Col>
          <Col lg={6} className=" px-md-5">
            <p className="h1 fw-bold">Javid Farazin</p>
            <p className=" fw-bold h5"> <span className="text-danger fw-bold h3">Optic</span>  Researcher</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              dolorem qui. Reprehenderit quasi sequi excepturi cumque ducimus,
              reiciendis ipsam mollitia aspernatur quidem voluptas totam soluta
              nulla itaque nostrum porro minus!
            </p>
            <div id="Media">
            <FacebookIcon className="fs-2 text-primary mx-2 mediaIcon" />
            <LinkedInIcon className="fs-2 text-primary mx-2 mediaIcon" />
            <InstagramIcon className="fs-2 text-danger mx-2 mediaIcon" />
            <img src={require('../Image/icons8-google-scholar-100-2.png')} className="mediaIcon" style={{width:"40px" , height:"40px"}}  alt="" />
            <img src={require('../Image/researchGit.png')}  className="mediaIcon" style={{width:"40px" , height:"40px"}} alt="" />
            </div>
            <hr />
             <div>
                 <p className="h2 fw-bold">Personal Info</p>
                 <Row md={2} className="p-3">
                     <Col md={6} className="">
                       <p className="fw-bold text-secondary" >Name  :       <span className="fw-bold" style={{color:"black"}}>Javid Farazin</span> </p>
                       <p className="fw-bold text-secondary" >Age  :        <span className="fw-bold" style={{color:"black"}}>27</span></p>
                       <p className="fw-bold text-secondary" >Nationality  :<span className="fw-bold" style={{color:"black"}}>Iran</span></p>
                       <p className="fw-bold text-secondary" >Freelance   :<span className="fw-bold" style={{color:"black"}}>Available</span></p>
                     </Col>
                     <Col md={6} className="">
                       <p className="fw-bold text-secondary" >Adress :      <span className="fw-bold" style={{color:"black"}}>Iran , Khoy</span></p>
                       <p className="fw-bold text-secondary" >Phone :       <span className="fw-bold" style={{color:"black"}}>2222222</span></p>
                       <p className="fw-bold text-secondary" >Email :       <span className="fw-bold" style={{color:"black"}}>javid@gmail.com</span></p>
                       <p className="fw-bold text-secondary" >Languages :   <span className="fw-bold" style={{color:"black"}}>Turkey , English</span></p>
                     </Col>
                 </Row>
             </div>
            
          </Col>
        </Row>
       
      </Container>
    </div>
  );
}
