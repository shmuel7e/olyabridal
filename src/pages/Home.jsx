import React from "react";
import { connect } from "react-redux";
import VideoBG from "../cmps/VideoBG";
import Selection from "../cmps/Selection";
import Bridal from "../cmps/Bridal";
import Evening from "../cmps/Evening";
import Contact from "../cmps/Contact";
import Follow from "../cmps/Follow";
import Footer from "../cmps/Footer";

const Home = () => {
  return (
    <div>
      <VideoBG  />
      <Selection />
      <Bridal />
      <Evening />
      <Contact />
      <Follow />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
