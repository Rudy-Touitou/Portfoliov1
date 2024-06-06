import React from 'react'
import './experience.css'   

// =========== REACT ICONS =========== 

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

// ===================================

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='overlined'>Dans Ma Boite à Outils</h5>
        <h2>Stacks & Compétences</h2>
        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>FrontEnd - Backend Stacks</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <FaHtml5 className='experience_details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <RiReactjsLine className='experience_details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Junior</small>
                </div>
              </article>
              <article className='experience_details'>
                <IoLogoCss3 className='experience_details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <FaNodeJs className='experience_details-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Junior</small>
                </div>
              </article>
              <article className='experience_details'>
                <IoLogoJavascript className='experience_details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <GrMysql className='experience_details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediaire</small>
                </div>
              </article>
            </div>
          </div>

          {/* END OF STACKS */}

          <div className="experience_frontend">
            <h3>Logiciels & Atouts</h3>
              <div className="experience_content">
                <article className='experience_details'>
                  <SiAdobephotoshop className='experience_details-icon' />
                  <div>
                    <h4>Photoshop</h4>
                    <small className='text-light'>Expérimenté</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <SiAdobepremierepro className='experience_details-icon' />
                  <div>
                    <h4>Premiere PRO</h4>
                    <small className='text-light'>Expérimenté</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <FaBootstrap className='experience_details-icon' />
                  <div>
                    <h4>BootStrap</h4>
                    <small className='text-light'>Intermediaire</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <FaWordpressSimple className='experience_details-icon' />
                  <div>
                    <h4>WordPress</h4>
                    <small className='text-light'>Intermediaire</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <SiJquery className='experience_details-icon' />
                  <div>
                    <h4>jQuery</h4>
                    <small className='text-light'>Junior</small>
                  </div>
                </article>
            </div>

          {/* END OF SOFTWARES */}

          </div>
        </div>
    </section>
  )
}

export default Experience