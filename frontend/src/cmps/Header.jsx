import React, { Component } from "react";
import { connect } from "react-redux";
import { setLanguage } from "../actions/LanguageActions";
import Navbar from "./Navbar";

// logos //
import mainLogo from "../assets/images/Logos/MainLogo.png";
import Socials from "./Socials";

class Header extends Component {
  state = {
    currTab: null,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onChangeLang = (lang) => {
    this.props.setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  toggleMenu = () => {
    let element = document.querySelector(".nav-hamburger");
    element.classList.toggle("menu-open");
  };

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      this.setState({ isScrolled: false });
    } else {
      this.setState({ isScrolled: true });
    }
  };

  render() {
    return (
      <div
        id="header"
        onScroll={this.handleScroll}
        className={` hide-for-res header flex justify-center align-center justify-between ${
          this.state.isScrolled ? "hidden-bg" : ""
        }`}
      >
        <a href="/">
          {" "}
          <div className="hide-for-res">
            {" "}
            <img className="main-logo" src={mainLogo} alt="" />{" "}
          </div>{" "}
        </a>
        <div className="hide-for-res">
          {" "}
          <Navbar lang={this.props.lang} />
        </div>
        <div className="hide-for-res">
          {" "}
          <Socials />{" "}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  };
};
const mapDispatchToProps = {
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
