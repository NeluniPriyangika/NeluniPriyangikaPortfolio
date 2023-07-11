import React from 'react';
import './about.css';
import ME from '../../assets/me1.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='AboutImage'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Undergraduate,<br/>Former school leaver trainee at Bank of Ceylon</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Education</h5>
              <small>Bachelor of Science (Hons) Information Technology</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Web, Mobile apps & Other development</small>
            </article>
          </div>

          <p>
            As an undergraduate pursuing a BSc in Information and Communication Technology at the University of Sri Jayewardenepura, 
            I am a dedicated and passionate coder with a keen interest in Frontend development, DevOps, and FullStack. I am currently expanding my 
            skills in these areas through various online courses and personal projects.<br/>

            Throughout my studies, I have consistently demonstrated a strong aptitude for programming, 
            as well as a deep commitment to learning and mastering new skills. I have worked on a range of projects both inside 
            and outside of the classroom, including developing a mobile app for a local business and contributing to an open-source project on GitHub. 
            And also I have experience as a postman student expert.<br/>

            In addition to my technical skills, I am also a strong communicator and collaborator. 
            I have worked on numerous group projects, both in-person and remotely, and have always been willing to share my expertise and learn from others.<br/>

            Looking ahead, my goal is to secure a position as a professional developer, 
            where I can put my skills to use and continue to grow as a programmer. I am excited about the opportunities that lie ahead 
            and am eager to contribute to the ongoing innovation and advancement of the industry.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About