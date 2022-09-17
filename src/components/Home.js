import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import BlogList from "./BlogList";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}
