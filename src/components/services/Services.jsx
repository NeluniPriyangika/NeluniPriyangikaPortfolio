import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I have qualification of</h5>
      <h2>Education & Other</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Higher Education</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Undergratuate in University of Sri Jayewardenaoura.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Degree: BSc (Hones) Information Technology.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Research: Awareness Pridection Of DevOps culture based on feature learning.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>GPA:3.45</p>
            </li>
          </ul>
        </article>
        {/*end of Web Design */}
        <article className='service'>
          <div className='service_head'>
            <h3>Primary Education</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ordinary Level in Uduweriya Junior School, Maho.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Advanced Level in Holly Family Convent Gril School, Kurunegala. </p>
            </li>
          </ul>
        </article>
        {/*end of Web Development */}
        <article className='service'>
          <div className='service_head'>
            <h3>Other</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Former school leaver trainee at Bank of Ceylon.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Deploma In Information and Comunication Technology in Josep Vas Institute.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Deploma In English in Aquinas University.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Postman Student Expert</p>
            </li>
          </ul>
        </article>
        {/*Moble App Development Design*/}
      </div>
    </section>
  )
}

export default Services