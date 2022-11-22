import React from "react";
import logo from "../assets/fb-logo.png"
import logoinsta from "../assets/insta-logo.png"
import logotwitter from "../assets/twitter-logo.png"
import logolinke from "../assets/linke-logo.png"

const Footer = () => {

return <footer className="App-Footer">
        <div>
        
        </div>
        <div id="social-media">
            <a href="http://www.facebook.com" title="facebook" target="_blank">
                <img src={logo} class="social-logo" alt="facebook"></img></a>
            <a href="http://instagram.com" title="instagram" target="_blank">
                <img src={logoinsta} class="social-logo" alt="instagram"></img></a>
            <a href="http://www.twitter.com" title="twitter" target="_blank">
                <img src={logotwitter} class="social-logo" alt="twitter"></img></a>
            <a href="http://www.linkedin.com" title="linkedin" target="_blank">
                <img src={logolinke} class="social-logo" alt="linkedin"></img></a>
        </div>
        </footer>

};

export default Footer;