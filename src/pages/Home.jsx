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
      <VideoBG />
      <Selection />
      <iframe title="myFrame" src="http://www.wedreviews.co.il/reviews/263094?if=1" width="100%" height="480px" allowfullscreen="allowfullscreen"></iframe>
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

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home));
