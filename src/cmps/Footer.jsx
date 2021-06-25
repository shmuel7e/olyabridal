import React, { Component } from 'react';
import Socials from './Socials';
import footerLOGO from '../assets/images/Logos/BgLogo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container flex column align-center">
                <div className="footer-logo"><img src={footerLOGO} alt="" /></div>
                <Socials isSelectionCard={true} />
                <div className="flex small-dots">
                    <div>FAQ</div>
                    <div>DELIVERY AND RETURNS</div>
                    <div>PRESS</div>
                    <div>PRIVACY POLICY</div>
                    <div>TERMS OF USE</div>
                    <div>CONTACT US</div>
                    <div>ABOUT US</div>
                </div>
            </div>
        )
    }
}
