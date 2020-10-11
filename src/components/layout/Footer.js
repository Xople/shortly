import React from 'react';
import { logo, iconTwitter, iconPinterest, iconInstagram, iconFacebook } from '../../assets/images/index';
import { ReactSVG } from 'react-svg';

export default function Footer() {
  return (
    <div className="footer pt-5 pb-5">
        <div className="container d-flex justify-content-lg-between">
          <div className="left">
            <ReactSVG src={logo} className="logo" wrapper="span" />
          </div>
          <div className="right d-flex justify-content-between">
            <div className="menu d-flex flex-column">
              <h6>Features</h6>
              <a href="/">Link Shortening</a>
              <a href="/">Branded Links</a>
              <a href="/">Analytics</a>
            </div>
            <div className="menu d-flex flex-column">
              <h6>Resources</h6>
              <a href="/">Blog</a>
              <a href="/">Developers</a>
              <a href="/">Support</a>
            </div>
            <div className="menu d-flex flex-column">
              <h6>Company</h6>
              <a href="/">About</a>
              <a href="/">Our Team</a>
              <a href="/">Careers</a>
              <a href="/">Contact</a>
            </div>
            <div className="social-media d-flex">
              <a href="/">
                <ReactSVG src={iconFacebook} />
              </a>
              <a href="/">
                <ReactSVG src={iconTwitter} />
              </a>
              <a href="/">
                <ReactSVG src={iconPinterest} />
              </a>
              <a href="/">
                <ReactSVG src={iconInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
