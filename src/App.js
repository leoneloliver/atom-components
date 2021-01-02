import React from "react";
import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";
import Grid from "./components/grid";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Modal from "./components/modal";
import Button from "./components/button";

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <section className="container">
          <h2>Cards Examples</h2>
          <Card category="model" custom />
          <Card category="woman" />
          
        </section>
        
        <section className="bg-grey" >
          <div className="container">
            <h2>Grid Example</h2>
            <Grid custom category="clothes girls" />
            <div>...</div>
          </div>
        </section>
        <section className="container">
          <h2>Carousel Examples</h2>
        <Carousel autoPlay={false} slidesToShow={5} category="fashion" custom />
        <Carousel autoPlay={false} slidesToShow={5} category="fashion" />
        </section>
       
       
      </div>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}
