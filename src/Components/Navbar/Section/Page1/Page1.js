import React from "react";
import "./Page1.css";
import Button from "@mui/material/Button";
import Card from "./components/Card";
import AOS from "aos";

export default function Section1(props) {
  AOS.init({
    duration: 900,
  });
  return (
    <>
      <section className="container-fluid" id="main-container">
        <div className="row" id="main-row">
          <div className="col-md-6" id="text-container-set">
            <h1>Innovation begins with us</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ex voluptatum accusantium deserunt dignissimos, cum maiores
              voluptates quam dicta rem. Quos velit laborum dolorem nostrum aut
              reiciendis magnam itaque est? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt ex voluptatum accusantium
              deserunt dignissimos, cum maiores voluptates quam dicta rem. Quos
              velit laborum dolorem nostrum aut reiciendis magnam itaque est?
            </p>
            <Button varinat="contained" id="main-container-button">
              Explore
            </Button>
            <Button varinat="contained" id="view-arrow-container-button">
              Get started
              <span>
                <svg
                  id="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
              <span className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
              </span>
            </Button>
          </div>
          <div className="col-md-6" id="imagecontainer">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="header imaeg set"
              id="main-image"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Our service ---------------- */}
      <section className="container" id="our-service-container">
        <h1 className="my-5">Our services</h1>
        <div className="main-card-set my-5" data-aos="fade-left">
          <div
            className="row my-5"
            id="main-container-set"
            data-aos="fade-left"
          >
            <div
              className="col-md-4"
              id="card-our-service"
              data-aos="fade-left"
            >
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Erthings"
                image="https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg"
              />
            </div>
            <div className="col-md-4" id="card-our-service">
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Electrical panels"
                image="https://images.unsplash.com/photo-1586683728252-8189330d7816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </div>
            <div className="col-md-4" id="card-our-service">
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Solar work"
                image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
              />
            </div>
            <div className="col-md-4" id="card-our-service">
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Installation"
                image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
              />
            </div>
            <div className="col-md-4" id="card-our-service">
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Components"
                image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
              />
            </div>
            <div className="col-md-4" id="card-our-service">
              <Card
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                heading="Contract work"
                image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --------------------- our work ---------------------  */}
      <section className="container" id="our-work-images">
        <div className="row" id="img-container-row">
          <div className="col-md-4" id="image-container-row-set"></div>
          <div className="col-md-4" id="image-container-row-set"></div>
          <div className="col-md-4" id="image-container-row-set"></div>
        </div>
      </section>
    </>
  );
}
