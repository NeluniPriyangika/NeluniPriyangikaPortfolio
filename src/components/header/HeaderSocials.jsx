import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';


const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
            <a href="https://instargram.com" target="_blank" rel="noreferrer"><GrInstagram/></a>
        </div>
    )
}

export default HeaderSocials