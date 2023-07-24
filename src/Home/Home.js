import React from "react";
import "./Home.css";
import { Button, Nav, NavItem, NavLink, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="header-text col-lg-12 ">
        <div className="col-lg-6">
        <h1 className="head m-3 animate__animated animate__bounceInLeft">
          WELCOME TO RESTORAUNT
        </h1>
        <p className=" col-sm-12  header-paragraph animate__animated animate__bounceInRight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <Button type="button" onClick={""}>More info</Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
