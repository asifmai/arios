import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FullStack from "../components/FullStack";
import Capabilities from "../components/Capabilities";
import HowWork from "../components/HowWork";
import Detail from "../components/Detail";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function index() {
  return (
    <div>
      <Nav />
      <Hero />
      <FullStack />
      <Capabilities />
      <HowWork />
      <Detail />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
