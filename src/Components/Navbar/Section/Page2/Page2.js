import React from "react";
import "./Page2.css";
import Button from "@mui/material/Button";
import Footer from "./container/Footer/Footer";
import Card from "./container/Card";
export default function Page2() {
  return (
    <>
      <section className="container-fluid" id="hero-section">
        <h1>Our projects with our clients and companies</h1>
        <Button variant="contained" id="explore-button-set" className="my-5">
          <span id="circle-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </span>
          <span id="circle-arrow-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </span>
          <span id="text-contents">Explore</span>
        </Button>
        <img
          src={require("./assets/kellen-riggin-Kgm6j1VWBNM-unsplash.jpg")}
          id="hero-section-image"
          alt="hero section image"
        />
      </section>
      <div className="container my-5" id="card-container">
        <h1>
          Here are few some of it{" "}
          <span id="circle-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </span>
        </h1>
        <div className="row">
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1645549855196-cc38c9d48a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1645583490528-ccea583188bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1645586546543-a2bc4545ceda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1645151875709-91907c69a55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/file-1635809686961-0440cea0b2fdimage"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1635246302373-701fe5e9f5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1645107653082-7a519d20daae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1618797127745-5fe49fd4e0df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="my-5"
            />
          </div>
          <div className="my-5 col-md-4">
            <Card
              image="https://images.unsplash.com/photo-1615877209694-699ca2e6403a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              className="my-5"
            />
          </div>
        </div>
      </div>
      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
}
