// Footer.js
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <footer>
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>learning</h4>
                <ul>
                    <li><a href="#">Python</a></li>
                    <li><a href="#">JavaSkript</a></li>
                    <li><a href="#">C-Sharp</a></li>
                    <li><a href="#">java</a></li>
                </ul>
                </div>
            <div className="footer-col">
                <h4>working</h4>
                <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#">America</a></li>
                    <li><a href="#">Malasia</a></li>
                    <li><a href="#">friens</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://wa.me/+996704459561"><FaWhatsapp size={30}/></a>
                    <a href="https://www.instagram.com/iliasbeknazarov06"><FaInstagram size={30}/></a>
                    <a href="https://www.youtube.com/c/iliasbeknazarov"><FiYoutube size={30} /></a>
                    <a href="https://t.me/iliasbeknazarov"><FaTelegramPlane size={30}/> </a>
                    <a href="https://www.facebook.com/iliasbeknazarov"><FaFacebook size={30}/></a>
                    <a href="https://github.com/iliasbeknazarov"><FaGithub size={30}/></a>
                    <a href="https://www.linkedin.com/in/iliasbeknazarov"><FaLinkedin size={30}/></a>
                </div>
            </div>
            </div>
        </div>
    </footer> 
        </footer>
    );
};

export default Footer;
